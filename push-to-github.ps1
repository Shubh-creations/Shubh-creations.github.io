Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Shubh // Personnel OS to GitHub Pages" -ForegroundColor Cyan
Write-Host "  Target: https://github.com/Shubh-creations/Shubhcreations.github.io" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "C:\My web github.io"

Write-Host "Current Directory: $(Get-Location)" -ForegroundColor Green

git remote set-url origin https://github.com/Shubh-creations/Shubhcreations.github.io.git
git push -u origin main --force
git push -u origin master --force

Write-Host ""
Write-Host "Deployment push completed! Live at: https://shubhcreations.github.io" -ForegroundColor Green
