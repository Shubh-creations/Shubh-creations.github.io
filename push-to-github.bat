@echo off
echo ========================================================
echo   Deploying Shubh // Personnel OS to GitHub Pages
echo   Target: https://github.com/Shubh-creations/Shubhcreations.github.io
echo ========================================================
echo.

cd /d "C:\My web github.io"

echo Step 1: Checking status...
git status

echo.
echo Step 2: Syncing remote...
git remote set-url origin https://github.com/Shubh-creations/Shubhcreations.github.io.git

echo.
echo Step 3: Pushing main and master to GitHub...
git push -u origin main --force
git push -u origin master --force

echo.
echo ========================================================
echo   Deployment command completed!
echo   Check your live site at: https://shubhcreations.github.io
echo ========================================================
pause
