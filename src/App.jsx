
import './App.css'

function App() {
  const n = 1000
  const images = Array(n).fill(0)
  console.log(images);
  

  return (
    images?.map((x, i) => {
       return <img loading='lazy' width={100} height={100} key={i} src={`https://picsum.photos/300/200?random=${i}`} alt={`img-${i}`}/>
    })
  )
}

export default App
