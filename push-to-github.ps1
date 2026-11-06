Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Solely to Shubh-creations.github.io" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "C:\My web github.io"

Write-Host "Staging and committing changes..." -ForegroundColor Yellow
git add .
git commit -m "update standalone portfolio"

Write-Host "Pushing live to Shubh-creations.github.io..." -ForegroundColor Yellow
git push origin main master gh-pages --force

Write-Host ""
Write-Host "Deployment successful! Live at: https://shubh-creations.github.io" -ForegroundColor Green
