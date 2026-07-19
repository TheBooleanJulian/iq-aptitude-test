# IQ Aptitude Practice Test

An interactive IQ aptitude practice quiz with 20 questions across four reasoning categories, instant feedback, score breakdown, and printable worksheet export.

![Questions](https://img.shields.io/badge/Questions-20-1D9E75) ![React](https://img.shields.io/badge/React-18-61DAFB) ![Vite](https://img.shields.io/badge/Vite-5-646CFF)

---

## Quick Start

> **One-time requirement:** Install [Node.js](https://nodejs.org/) (v18 or later). Everything else is handled automatically.

### Windows

Double-click **`START — Windows.bat`**

### macOS

1. Right-click **`START — Mac.command`** → **Open** (first time only, to allow execution)
2. After that, double-click it any time to launch

The launcher will:
- Check Node.js is installed
- Auto-install dependencies on first run (~30 seconds, once only)
- Start the dev server
- Open the app in your browser at `http://localhost:5173`

To stop the app, close the launcher window.

---

## Features

- **20 questions** — Pictorial (8), Number (6), Verbal (4), Logic (2)
- **Pictorial reasoning** — 3×3 matrix patterns, arrow rotation series, size/count progressions, odd-one-out
- **Number reasoning** — geometric series, Fibonacci, perfect squares, alternating operations
- **Verbal reasoning** — analogies across collective nouns, measurements, professions, antonyms
- **Logic reasoning** — categorical and partial syllogisms
- **Instant feedback** — explanations revealed after each answer
- **Results screen** — estimated IQ range, category score breakdown, per-question review
- **Printable worksheet** — downloads a standalone `.html` file (questions only, or with answer key) that prints perfectly from any browser

---

## Project Structure

```
iq-aptitude-test/
├── START — Windows.bat         ← double-click to launch (Windows)
├── START — Mac.command         ← double-click to launch (macOS)
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx                 ← quiz UI, SVG renderers, worksheet export
    └── iq_questions_db.js      ← question bank (edit this to add questions)
```

---

## Adding / Editing Questions

All questions live in **`src/iq_questions_db.js`**, split into four named arrays:

```js
const PICTORIAL = [ /* 8 questions */ ]
const NUMBER    = [ /* 6 questions */ ]
const VERBAL    = [ /* 4 questions */ ]
const LOGIC     = [ /* 2 questions */ ]
```

Append a new object to the relevant array — the quiz picks it up automatically with no changes needed in `App.jsx`.

**Question shape reference:**

| Field      | Type             | Notes                                                         |
|------------|------------------|---------------------------------------------------------------|
| `id`       | number           | Unique identifier                                             |
| `type`     | string           | `matrix` `series` `odd_one_out` `sequence` `analogy` `logic` |
| `cat`      | string           | `Pictorial` `Number` `Verbal` `Logic`                         |
| `diff`     | string           | `Easy` `Medium` `Medium-Hard` `Hard`                          |
| `title`    | string           | Prompt shown to the user                                      |
| `summary`  | string           | Short label in results review                                 |
| `options`  | array (length 4) | Answer choices                                                |
| `ans`      | number (0–3)     | Index of the correct option                                   |
| `exp`      | string           | Explanation shown after answering                             |

---

## Manual CLI (optional)

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

---

## Deploying

| Platform         | Steps                                     |
|------------------|-------------------------------------------|
| **Vercel**       | `vercel` CLI or connect GitHub repo       |
| **Netlify**      | Drag `dist/` into Netlify dashboard       |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch         |

---

## Tech Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- Inline SVG for all pictorial shapes (no canvas, no external libs)
- Zero runtime CSS frameworks

---

## License

The application code is licensed under the [MIT License](LICENSE).

The **question bank** (`src/iq_questions_db.js` — question text, answer
options, and explanations) is © 2026 TheBooleanJulian, all rights reserved,
and is **not** covered by the MIT license. It may not be copied, redistributed,
or reused without prior written permission.
