Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Auto-Deploying Changes to GitHub Pages" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "C:\My web github.io"

Write-Host "Staging and committing changes..." -ForegroundColor Yellow
git add .
git commit -m "update portfolio content"

Write-Host "Pushing live to GitHub Pages..." -ForegroundColor Yellow
git push origin main master gh-pages --force

Write-Host ""
Write-Host "Deployment successful! Live sites update in 30-60s:" -ForegroundColor Green
Write-Host "- https://shubh-creations.github.io/Shubhcreations.github.io" -ForegroundColor Green
Write-Host "- https://shubh-creations.github.io" -ForegroundColor Green
