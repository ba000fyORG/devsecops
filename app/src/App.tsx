import { useEffect, useState } from 'react'

export default function App() {
  const [api, setApi] = useState<string | null>(null)

  useEffect(() => {
    setApi(import.meta.env.VITE_API_BASE_URL ?? null)
  }, [])

  return (
    <div className="container">
      <h1>DevSecOps Demo</h1>
      <div className="card">
        <p>Привет! Это тестовый проект с CI/CD, секретами и безопасностью.</p>
        <p className="small">API_BASE_URL: <b>{api ?? 'секрет не установлен'}</b></p>
      </div>
    </div>
  )
}