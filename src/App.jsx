
import { useMemo, memo, useState } from "react";
import {List} from "react-window";
const Row = memo(({ index, style , images}) => (
    <div style={style}>  {/* style is REQUIRED — controls positioning */}
      <img
        loading="lazy"
        width={100}
        height={100}
        src={images[index]}
        alt={`img-${index}`}
      />
    </div>
));

function App() {
  const [count, setCount] = useState(0)

  const n = 1000;
  const images = useMemo(()=> {
    return  Array(n).fill(0).map((_, i) => {
      return `https://picsum.photos/300/200?random=${i}`
    })
  }, []) 

  return (<>
    <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    <List
      rowComponent={Row}
      rowCount={n}       // total number of items
      rowHeight={100}      // height of each row in px
      rowProps={{images: images}}
      style={{height: window.innerHeight}}
    />
  </>

  );
}

export default App
