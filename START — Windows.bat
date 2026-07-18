@echo off
title IQ Aptitude Test — Launcher
color 0A

echo.
echo  ================================================
echo   IQ Aptitude Practice Test
echo  ================================================
echo.

:: ── Check Node.js is installed ──────────────────────
where node >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo  [ERROR] Node.js is not installed.
    echo.
    echo  Please download and install Node.js from:
    echo    https://nodejs.org/
    echo.
    echo  Then double-click this file again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo  Node.js found: %NODE_VER%

:: ── Install dependencies if node_modules is missing ─
if not exist "node_modules\" (
    echo.
    echo  Installing dependencies ^(first run only^)...
    echo  This may take ~30 seconds.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        color 0C
        echo.
        echo  [ERROR] npm install failed.
        echo  Check your internet connection and try again.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo  Dependencies installed successfully!
)

:: ── Start the dev server ─────────────────────────────
echo.
echo  Starting app...
echo  It will open automatically at http://localhost:5173
echo.
echo  To stop the app, close this window.
echo.

start "" http://localhost:5173
npm run dev

pause
