function Footer({ appName }) {
  const year = new Date().getFullYear()
  const loadedAt = new Date().toLocaleTimeString()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 16, padding: '12px 0' }}>
      <p style={{ textAlign: 'center' }}>
        {appName} • Copyright {year}
      </p>
      <p style={{ textAlign: 'center', fontSize: 13, opacity: 0.8 }}>
        Footer chunk loaded at {loadedAt}
      </p>
    </footer>
  )
}

export default Footer
