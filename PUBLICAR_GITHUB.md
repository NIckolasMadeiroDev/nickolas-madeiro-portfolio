# Instruções para Publicar no GitHub

## Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `nickolas-madeiro-portfolio`
3. Descrição: "Portfólio profissional de Nickolas Madeiro - Desenvolvedor Full Stack Sênior"
4. **Marque como Público** (Public)
5. **NÃO** marque "Initialize this repository with a README"
6. Clique em "Create repository"

## Passo 2: Publicar o Código

Após criar o repositório, execute os seguintes comandos:

```bash
git remote add origin https://github.com/SEU_USUARIO/nickolas-madeiro-portfolio.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.**

## Alternativa: Usando SSH

Se você preferir usar SSH:

```bash
git remote set-url origin git@github.com:SEU_USUARIO/nickolas-madeiro-portfolio.git
git push -u origin main
```

## Verificar Publicação

Após o push, acesse:
https://github.com/SEU_USUARIO/nickolas-madeiro-portfolio

O repositório deve estar público e visível para todos.

