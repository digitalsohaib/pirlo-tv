@echo off
title Pirlo TV - Upload to GitHub
cd /d "e:\Cursor Projects\Pirlo TV"

echo.
echo  ============================================
echo    UPLOAD PIRLO TV TO GITHUB
echo    Repo: digitalsohaib/pirlo-tv
echo  ============================================
echo.

REM Step 1 - GitHub login (one time only)
echo [1/2] GitHub login - browser will open...
echo       Sign in with your GitHub account (digitalsohaib)
echo       Copy the code shown and paste it in the browser.
echo.
"C:\Program Files\GitHub CLI\gh.exe" auth login -h github.com -p https -w
if errorlevel 1 (
    echo Login failed. Try again or sign in at github.com first.
    pause
    exit /b 1
)

echo.
echo [2/2] Uploading your code...
echo.

git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/digitalsohaib/pirlo-tv.git
git push -u origin main

if errorlevel 1 (
    echo.
    echo Push failed. Run this file again after signing in at github.com
    pause
    exit /b 1
)

echo.
echo  SUCCESS! Your code is live on GitHub:
echo  https://github.com/digitalsohaib/pirlo-tv
echo.
pause
