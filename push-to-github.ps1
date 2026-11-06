Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Shubh // Personnel OS to GitHub Pages" -ForegroundColor Cyan
Write-Host "  Target: https://github.com/Shubh-creations/Shubh-creations.github.io" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "C:\My web github.io"

Write-Host "Current Directory: $(Get-Location)" -ForegroundColor Green

git remote set-url origin https://github.com/Shubh-creations/Shubh-creations.github.io.git
git push -u origin main --force
git push -u origin master --force
git push -u origin gh-pages --force

Write-Host ""
Write-Host "Deployment push completed! Clean root domain at: https://shubh-creations.github.io" -ForegroundColor Green
