# Script para criar repositório no GitHub
# Requer GitHub CLI (gh) ou token de acesso pessoal

Write-Host "Criando repositório no GitHub..." -ForegroundColor Cyan

$repoName = "nickolas-madeiro-portfolio"
$description = "Portfólio profissional de Nickolas Madeiro - Desenvolvedor Full Stack Sênior"
$isPublic = $true

# Tentar usar GitHub CLI se disponível
if (Get-Command gh -ErrorAction SilentlyContinue) {
    Write-Host "Usando GitHub CLI..." -ForegroundColor Green
    gh repo create $repoName --public --description $description --source=. --remote=origin --push
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Repositório criado com sucesso!" -ForegroundColor Green
        exit 0
    }
}

# Se GitHub CLI não estiver disponível, instruir criação manual
Write-Host "GitHub CLI não encontrado. Siga estas instruções:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Acesse: https://github.com/new" -ForegroundColor Cyan
Write-Host "2. Nome do repositório: $repoName" -ForegroundColor Cyan
Write-Host "3. Descrição: $description" -ForegroundColor Cyan
Write-Host "4. Marque como PÚBLICO" -ForegroundColor Cyan
Write-Host "5. NÃO marque 'Initialize with README'" -ForegroundColor Cyan
Write-Host "6. Clique em 'Create repository'" -ForegroundColor Cyan
Write-Host ""
Write-Host "Após criar, execute:" -ForegroundColor Yellow
Write-Host "git push -u origin main" -ForegroundColor Green

