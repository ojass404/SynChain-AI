import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [procurements, setProcurements] = React.useState([])
  const [text, setText] = React.useState('')
  const [budget, setBudget] = React.useState('')
  const [logs, setLogs] = React.useState([])
  const [wsConnected, setWsConnected] = React.useState(false)
  const [activeId, setActiveId] = React.useState(null)

  // Fetch procurements
  const fetchProcurements = async () => {
    try {
      const res = await fetch('/api/v1/procurements/')
      const data = await res.json()
      setProcurements(data)
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  React.useEffect(() => {
    fetchProcurements()
    const interval = setInterval(fetchProcurements, 5000)
    return () => clearInterval(interval)
  }, [])

  // WebSocket
  React.useEffect(() => {
    if (!activeId) return

    const ws = new WebSocket(`ws://localhost:8000/ws/${activeId}`)
    ws.onopen = () => setWsConnected(true)
    ws.onmessage = (event) => {
      const log = JSON.parse(event.data)
      setLogs(prev => [...prev, log])
    }
    ws.onclose = () => setWsConnected(false)

    return () => ws.close()
  }, [activeId])

  // Create procurement
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('input_type', 'text')
    formData.append('raw_text', text)
    if (budget) formData.append('budget_inr', budget)

    try {
      const res = await fetch('/api/v1/procurements/', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setText('')
        setBudget('')
        fetchProcurements()
      }
    } catch (err) {
      console.error('Submit error:', err)
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: 200, background: '#1a1a2e', color: 'white', padding: 20 }}>
        <h2 style={{ color: '#7F77DD', marginBottom: 30 }}>SynChain AI</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button onClick={() => setActiveId(null)} style={navBtnStyle}>Dashboard</button>
          <a href="/new" style={linkStyle}>New Request</a>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 24, background: '#f8f7f4' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 16 }}>
          
          {/* Left: Procurement List + Form */}
          <div>
            {/* Quick Form */}
            <div style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 16, border: '1px solid #e8e6e0' }}>
              <h3 style={{ marginBottom: 12 }}>New Procurement</h3>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="I need 50 boxes of A4 paper..."
                  rows={3}
                  style={inputStyle}
                />
                <input
                  type="text"
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  placeholder="Budget: 5000"
                  style={inputStyle}
                />
                <button type="submit" style={btnStyle}>Submit Request</button>
              </form>
            </div>

            {/* Procurement List */}
            <div style={{ background: 'white', padding: 16, borderRadius: 12, border: '1px solid #e8e6e0' }}>
              <h3 style={{ marginBottom: 12 }}>Procurements ({procurements.length})</h3>
              {procurements.map(p => (
                <div
                  key={p.id}
                  onClick={() => { setActiveId(p.id); setLogs([]) }}
                  style={{
                    padding: 10,
                    marginBottom: 8,
                    borderRadius: 8,
                    border: `2px solid ${p.id === activeId ? '#7F77DD' : '#e8e6e0'}`,
                    cursor: 'pointer',
                  }}
                >
                  <strong>{p.item_name || 'Unnamed'}</strong>
                  <div style={{ fontSize: 13, color: '#666' }}>
                    {p.status} | ₹{(p.budget_inr || 0).toLocaleString('en-IN')}
                    {p.final_price_inr && ` → ₹${p.final_price_inr.toLocaleString('en-IN')}`}
                  </div>
                </div>
              ))}
              {procurements.length === 0 && <p style={{ color: '#999' }}>No procurements yet</p>}
            </div>
          </div>

          {/* Right: Agent Feed */}
          <div style={{
            background: '#0d1117',
            borderRadius: 12,
            padding: 16,
            height: '80vh',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#ccc',
          }}>
            <div style={{ color: '#7F77DD', marginBottom: 12, fontWeight: 'bold' }}>
              Agent Feed {wsConnected ? '🟢 Live' : '🔴'}
            </div>
            {activeId ? (
              logs.length > 0 ? logs.map((log, i) => (
                <div key={i} style={{ marginBottom: 6, color: log.level === 'error' ? '#ff6b6b' : log.level === 'success' ? '#51cf66' : '#aaa' }}>
                  <span style={{ color: '#555' }}>{new Date(log.timestamp).toLocaleTimeString()}</span>{' '}
                  {log.message}
                </div>
              )) : <div style={{ color: '#666', textAlign: 'center', paddingTop: 40 }}>Waiting for agent...</div>
            ) : (
              <div style={{ color: '#666', textAlign: 'center', paddingTop: 80 }}>
                Click a procurement to watch the agent
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#aaa',
  cursor: 'pointer',
  fontSize: 14,
  textAlign: 'left',
  padding: '8px 0',
}

const linkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  fontSize: 14,
  padding: '8px 0',
}

const inputStyle = {
  width: '100%',
  padding: 10,
  marginBottom: 8,
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
  boxSizing: 'border-box',
}

const btnStyle = {
  width: '100%',
  padding: 12,
  background: '#7F77DD',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 'bold',
  cursor: 'pointer',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)