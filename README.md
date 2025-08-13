# full-devsecops-demo

Демо-репозиторий: React (Vite) + GitHub Actions (CI, деплой на Pages), секреты, SAST (CodeQL, Semgrep), сканы Terraform/Ansible (tfsec/checkov/ansible-lint), Trivy (vuln,secret,config).

## Быстрый старт
1. Добавь секрет `API_BASE_URL` в Settings → Secrets and variables → Actions.
2. (Опционально) добавь `SEMGREP_APP_TOKEN`.
3. Пушни в `main` — Actions запустятся автоматически.