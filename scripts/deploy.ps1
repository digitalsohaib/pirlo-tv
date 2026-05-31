# Run AFTER: gh auth login  AND  vercel login (one-time browser login each)
Set-Location "e:\Cursor Projects\Pirlo TV"

Write-Host "=== GitHub ===" -ForegroundColor Cyan
git branch -M main
$repoExists = git remote get-url origin 2>$null
if (-not $repoExists) {
  gh repo create pirlo-tv --public --source=. --remote=origin --push
} else {
  git push -u origin main
}

Write-Host "`n=== Vercel env vars ===" -ForegroundColor Cyan
Write-Host "Add these in Vercel Dashboard if not using CLI:"
Write-Host "  SPORTS_API_KEY = 67a0c38783109c836b1ef14cbd0db6f0"
Write-Host "  SPORTS_API_BASE_URL = https://v3.football.api-sports.io"
Write-Host "  NEXT_PUBLIC_SITE_URL = https://pirlotvfutbol.com"

Write-Host "`n=== Deploy ===" -ForegroundColor Cyan
npx vercel --prod --yes

Write-Host "`nDone! Connect pirlotvfutbol.com in Vercel Domains." -ForegroundColor Green
