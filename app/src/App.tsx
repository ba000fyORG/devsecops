import { useEffect, useState } from 'react'

export default function App() {
  const [api, setApi] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setApi(import.meta.env.VITE_API_BASE_URL ?? null)
  }, [])

  async function checkHealth() {
    if (!api) {
      setError('API_BASE_URL не задан')
      return
    }
    setError(null)
    setLoading(true)
    try {
      // убираем trailing slash у API_BASE_URL, если есть
      const base = (api ?? '').replace(/\/$/, '')
      const res = await fetch(`${base}/status`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const text = await res.text()
      setStatus(text.slice(0, 200) || 'ok')
    } catch (e: any) {
      setError(e.message || 'request failed')
      setStatus(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>DevSecOps Demo</h1>
      <div className="card">
        <p>Привет! Это тестовый проект с CI/CD, секретами и безопасностью.</p>
        <p className="small">
          API_BASE_URL: <b>{api ?? 'секрет не установлен'}</b>
        </p>

        <div style={{ marginTop: '1rem' }}>
          <button onClick={checkHealth} disabled={loading} style={{ padding: '0.5rem 1rem', borderRadius: 8 }}>
            {loading ? 'Проверяю…' : 'Health Check'}
          </button>
          {status && (
            <p className="small">
              Статус API: <b>{status}</b>
            </p>
          )}
          {error && (
            <p className="small">
              Ошибка: <b>{error}</b>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}