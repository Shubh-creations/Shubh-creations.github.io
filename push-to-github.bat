@echo off
echo ========================================================
echo   Deploying Super Minimalist Personnel OS to GitHub
echo ========================================================
echo.

cd /d "C:\My web github.io"

echo Step 1: Checking status...
git status

echo.
echo Step 2: Pushing to all branches...
git push -u origin main --force
git push -u origin master --force
git push -u origin gh-pages --force

echo.
echo ========================================================
echo   Deployment completed!
echo ========================================================
pause
