@echo off
echo ========================================================
echo   Auto-Deploying Changes to GitHub Pages
echo ========================================================
echo.

cd /d "C:\My web github.io"

echo Step 1: Staging changes...
git add .

echo.
echo Step 2: Committing updates...
git commit -m "update portfolio content"

echo.
echo Step 3: Pushing live to GitHub Pages...
git push origin main master gh-pages --force

echo.
echo ========================================================
echo   Deployment successful! 
echo   Your live site will update within 30-60 seconds at:
echo   - https://shubh-creations.github.io/Shubhcreations.github.io
echo   - https://shubh-creations.github.io
echo ========================================================
pause
