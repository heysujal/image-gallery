
import {List} from "react-window";

function App() {
  const n = 1000;
  const images = Array(n).fill(0).map((_, i) => {
    return `https://picsum.photos/300/200?random=${i}`
  })

  const Row = ({ index, style , images}) => (
    <div style={style}>  {/* style is REQUIRED — controls positioning */}
      <img
        loading="lazy"
        width={100}
        height={100}
        src={images[index]}
        alt={`img-${index}`}
      />
    </div>
  );

  return (
    <List
      rowComponent={Row}
      rowCount={n}       // total number of items
      rowHeight={100}      // height of each row in px
      rowProps={{images: images}}
      style={{height: '100px'}}
    />

  );
}

export default App
