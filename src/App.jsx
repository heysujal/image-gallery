import { lazy, memo, Suspense, useMemo, useState } from 'react'
import { List } from 'react-window'

const Footer = lazy(() => import('./footer'))

const Row = memo(({ index, style, images }) => (
  <div style={style}>
    <img
      loading="lazy"
      width={100}
      height={100}
      src={images[index]}
      alt={`img-${index}`}
    />
  </div>
))

function App() {
  const [count, setCount] = useState(0)
  const [showFooter, setShowFooter] = useState(false)

  const n = 1000
  const images = useMemo(() => {
    return Array(n)
      .fill(0)
      .map((_, i) => `https://picsum.photos/300/200?random=${i}`)
  }, [])

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>

      <List rowComponent={Row} rowCount={n} rowHeight={100} rowProps={{ images }} />

      {!showFooter ? (
        <button onClick={() => setShowFooter(true)}>Load footer (lazy)</button>
      ) : (
        <Suspense fallback={<p>Loading footer chunk...</p>}>
          <Footer appName="Image Gallery" />
        </Suspense>
      )}
    </>
  )
}

export default App
