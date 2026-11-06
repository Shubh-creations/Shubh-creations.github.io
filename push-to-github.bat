@echo off
echo ========================================================
echo   Deploying Solely to Shubh-creations.github.io
echo ========================================================
echo.

cd /d "C:\My web github.io"

echo Step 1: Staging changes...
git add .

echo.
echo Step 2: Committing updates...
git commit -m "update standalone portfolio"

echo.
echo Step 3: Pushing live to Shubh-creations.github.io...
git push origin main master gh-pages --force

echo.
echo ========================================================
echo   Deployment successful! 
echo   Live at: https://shubh-creations.github.io
echo ========================================================
pause
