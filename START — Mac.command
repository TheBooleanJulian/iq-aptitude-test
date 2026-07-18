#!/usr/bin/env bash
# ─────────────────────────────────────────────────────
#  IQ Aptitude Practice Test — macOS / Linux Launcher
#  Double-click this file (or run: bash "START — Mac.command")
# ─────────────────────────────────────────────────────

# Change to the directory this script lives in
cd "$(dirname "$0")"

echo ""
echo " ================================================"
echo "  IQ Aptitude Practice Test"
echo " ================================================"
echo ""

# ── Check Node.js ─────────────────────────────────────
if ! command -v node &>/dev/null; then
    echo " [ERROR] Node.js is not installed."
    echo ""
    echo " Please install Node.js from:"
    echo "   https://nodejs.org/"
    echo ""
    echo " On macOS you can also run:"
    echo "   brew install node"
    echo ""
    read -p " Press Enter to exit..."
    exit 1
fi

NODE_VER=$(node -v)
echo " Node.js found: $NODE_VER"

# ── Install dependencies if missing ──────────────────
if [ ! -d "node_modules" ]; then
    echo ""
    echo " Installing dependencies (first run only)..."
    echo " This may take ~30 seconds."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo " [ERROR] npm install failed."
        echo " Check your internet connection and try again."
        echo ""
        read -p " Press Enter to exit..."
        exit 1
    fi
    echo ""
    echo " Dependencies installed successfully!"
fi

# ── Open browser after short delay ───────────────────
(sleep 2 && open "http://localhost:5173" 2>/dev/null || \
           xdg-open "http://localhost:5173" 2>/dev/null) &

# ── Start dev server ─────────────────────────────────
echo ""
echo " Starting app..."
echo " Opening http://localhost:5173 in your browser."
echo ""
echo " To stop the app, press Ctrl+C or close this window."
echo ""

npm run dev
