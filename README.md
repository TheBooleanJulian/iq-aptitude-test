<div align="center">

# IQ Aptitude Practice Test

**An interactive IQ aptitude practice quiz with 20 questions, instant feedback, and printable worksheet export.**

![React](https://img.shields.io/badge/-React%2018-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite%205-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Questions](https://img.shields.io/badge/Questions-20-1D9E75)
![License](https://img.shields.io/badge/license-MIT%20(code%20only)-00D4C8.svg)

</div>

---

## What it does

A self-contained browser app that presents 20 reasoning questions across four IQ aptitude categories — Pictorial, Number, Verbal, and Logic. It's aimed at anyone preparing for psychometric or aptitude tests who wants realistic practice with immediate explanations. After completing the quiz you get an estimated IQ range, a per-category score breakdown, and the option to download a standalone printable worksheet (with or without the answer key) that renders correctly in any browser.

## Features

- **20 questions** across Pictorial (8), Number (6), Verbal (4), and Logic (2)
- **Pictorial reasoning** — 3×3 matrix patterns, arrow rotation series, size/count progressions, odd-one-out
- **Number reasoning** — geometric series, Fibonacci, perfect squares, alternating operations
- **Verbal reasoning** — analogies covering collective nouns, measurements, professions, and antonyms
- **Logic reasoning** — categorical and partial syllogisms
- **Instant feedback** — explanation revealed after each answer
- **Results screen** — estimated IQ range, category score breakdown, per-question review
- **Printable worksheet export** — downloads a standalone `.html` file (questions only, or with answer key) that prints cleanly from any browser
- **One-click launchers** — `START — Windows.bat` and `START — Mac.command` handle dependency install and dev server automatically

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | React 18 + Vite 5 |
| Question bank | `src/iq_questions_db.js` (plain JS arrays) |
| Local launch | Shell/Batch launchers (no server required) |

## Quick Start

> **One-time requirement:** Install [Node.js](https://nodejs.org/) (v18 or later).

### Windows
Double-click **`START — Windows.bat`**

### macOS
1. Right-click **`START — Mac.command`** → **Open** (first time only, to allow execution)
2. Double-click it any time after that

The launcher will auto-install dependencies on first run (~30 seconds), start the dev server, and open the app at `http://localhost:5173`. Close the launcher window to stop.

### Manual CLI

```bash
npm install        # first time only
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project Structure

```
iq-aptitude-test/
├── START — Windows.bat          ← double-click to launch (Windows)
├── START — Mac.command          ← double-click to launch (macOS)
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                  ← quiz UI, SVG renderers, worksheet export
    └── iq_questions_db.js       ← question bank (edit here to add questions)
```

## Adding / Editing Questions

All questions live in **`src/iq_questions_db.js`**, split into four named arrays:

```js
const PICTORIAL = [ /* 8 questions */ ]
const NUMBER    = [ /* 6 questions */ ]
const VERBAL    = [ /* 4 questions */ ]
const LOGIC     = [ /* 2 questions */ ]
```

Append a new object to the relevant array — the quiz picks it up automatically with no changes needed elsewhere.

| Field | Type | Notes |
|---|---|---|
| `id` | number | Unique identifier |
| `type` | string | `matrix` `series` `odd_one_out` `sequence` `analogy` `logic` |
| `cat` | string | `Pictorial` `Number` `Verbal` `Logic` |
| `diff` | string | `Easy` `Medium` `Medium-Hard` `Hard` |
| `title` | string | Prompt shown to the user |
| `summary` | string | Short label in results review |
| `options` | array (length 4) | Answer choices |
| `ans` | number (0–3) | Index of the correct option |
| `exp` | string | Explanation shown after answering |

## Status / Roadmap

- [x] 20-question quiz with four reasoning categories
- [x] Instant per-answer feedback with explanations
- [x] Results screen with estimated IQ range and score breakdown
- [x] Printable worksheet export (questions only and with answer key)
- [x] One-click launchers for Windows and macOS
- [ ] Timed mode
- [ ] Expanded question bank

## Changelog

- **Jul 2026** — Initial release: full 20-question quiz, four reasoning categories, results screen, printable worksheet export, one-click launchers for Windows and macOS; MIT license added (code only — question bank content rights reserved)

## License

MIT for the code. The question bank content (`src/iq_questions_db.js`) is copyright reserved — see `LICENSE` for details.

---

<div align="center">
<sub>Built by <a href="https://github.com/TheBooleanJulian">@TheBooleanJulian</a></sub>
</div>