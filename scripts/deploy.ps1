# Met en ligne le site sur GitHub Pages (branche gh-pages).
# Usage, depuis la racine du projet : powershell -File scripts\deploy.ps1
$ErrorActionPreference = "Stop"
$racine = Split-Path $PSScriptRoot -Parent
Set-Location $racine

$env:NEXT_PUBLIC_BASE_PATH = "/portfolio-marvin"
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build en échec" }

$remote = git remote get-url origin
Set-Location "$racine\out"
New-Item -ItemType File -Force .nojekyll | Out-Null
if (Test-Path .git) { Remove-Item -Recurse -Force .git }
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C $racine config user.name)" -c user.email="$(git -C $racine config user.email)" commit -q -m "Déploiement $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push -f $remote gh-pages
Remove-Item -Recurse -Force .git
Set-Location $racine
Write-Host "En ligne : https://egomania1.github.io/portfolio-marvin/"
