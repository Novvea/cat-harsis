import { useState } from 'react'

function App() {
  const [color, setColor] = useState({
    bodycolor: 'grey',
    earcolor: 'pink',
    nosecolor: 'yellow',
    eyecolor: 'chocolate'
  })
  const [newColor, setNewColor] = useState({
    bodycolor: 'grey',
    earcolor: 'pink',
    nosecolor: 'yellow',
    eyecolor: 'chocolate'
  })

   const handleColorChange = (event) => {
     setNewColor({...newColor, [event.target.id]: event.target.value})
      setColor({...color, [event.target.id]: event.target.value})
  } 
  console.log('color', color)


  return (
    <div>
      <h1>When you just need to color a cat</h1>
        <label for='bodycolor'>Choose color of body:</label>
        <input type='color' name='bodycolor' id='bodycolor' value={newColor.bodycolor} onChange={handleColorChange} />
        <br/>
        <label for='earcolor'>Choose color of ears:</label>
        <input type='color' name='earcolor' id='earcolor' value={newColor.earcolor} onChange={handleColorChange} />
        <br/>
        <label for='nosecolor'>Choose color of nose:</label>
        <input type='color' name='nosecolor' id='nosecolor' value={newColor.nosecolor} onChange={handleColorChange} />
        <br/>
        <label for='eyecolor'>Choose color of eyes:</label>
        <input type='color' name='eyecolor' id='eyecolor' value={newColor.eyecolor} onChange={handleColorChange} />
      <div>
        <svg width="189" height="268" viewBox="0 0 189 268" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id='ears' fill={color.earcolor}>
            <path d="M40.5028 5.50001L67.9441 31.8704L40.5028 39.8534L40.5028 5.50001Z" />
            <path d="M152.774 12.8424L153.302 45.3919L127.424 33.2658L152.774 12.8424Z" />
          </g>
          <g id='body' fill={color.bodycolor}>
            <ellipse cx="92.5" cy="96" rx="91.5" ry="68" />
            <path d="M174 206.5C174 190.189 165.888 174.546 151.447 163.013C137.007 151.479 117.422 145 97 145C76.5783 145 56.9931 151.479 42.5528 163.013C28.1125 174.546 20 190.189 20 206.5L97 206.5H174Z"/>
          </g>
          <g id='eyewhite' fill="white">
{/*             <ellipse cx="70.6947" cy="82.8365" rx="11" ry="15.7655" transform="rotate(-79.4397 70.6947 82.8365)" />
            <ellipse cx="122.152" cy="82.6755" rx="11" ry="15.6593" transform="rotate(82.8785 122.152 82.6755)"/> */}
            <path d="M84.2254 85.359C85.3388 79.3868 79.743 73.3338 71.7268 71.8394C63.7106 70.3449 56.3096 73.9749 55.1962 79.9471C54.0828 85.9194 59.6787 91.9723 67.6948 93.4668C75.711 94.9612 83.112 91.3312 84.2254 85.359Z"/>
            <path d="M107.809 84.4675C108.562 90.4958 115.723 94.5643 123.803 93.5547C131.884 92.5452 137.823 86.8399 137.07 80.8116C136.317 74.7834 129.156 70.7149 121.076 71.7244C112.995 72.734 107.056 78.4393 107.809 84.4675Z"/>
          </g>
          <g id='eyes' fill={color.eyecolor}>
            <path d="M69.5 93C76.4036 93 82 88.299 82 82.5C82 76.701 76.4036 72 69.5 72C62.5964 72 57 76.701 57 82.5C57 88.299 62.5964 93 69.5 93Z"/>
            <path d="M122.5 93C129.404 93 135 88.299 135 82.5C135 76.701 129.404 72 122.5 72C115.596 72 110 76.701 110 82.5C110 88.299 115.596 93 122.5 93Z" />
          </g>
          <g id='nose' fill={color.nosecolor}>
            <path d="M96.6772 123.035C95.8899 124.097 94.3072 124.116 93.4939 123.074L87.1304 114.919C86.1126 113.615 87.0282 111.71 88.6824 111.689L101.206 111.534C102.86 111.514 103.823 113.396 102.838 114.725L96.6772 123.035Z" />
          </g>
          <g id='details' fill="black">
            <ellipse cx="70.5" cy="83" rx="6.5" ry="6" />
            <ellipse cx="70.5" cy="83" rx="6.5" ry="6" />
            <ellipse cx="70.5" cy="83" rx="6.5" ry="6" />
            <ellipse cx="121.5" cy="83" rx="6.5" ry="6" />
            <ellipse cx="121.5" cy="83" rx="6.5" ry="6" />
            <ellipse cx="121.5" cy="83" rx="6.5" ry="6" />
          </g>
          <g id='details' stroke="black">
            <path d="M95.4651 124V130.871M95.4651 130.871C97.783 135.66 110 140 117.5 134M95.4651 130.871C92.7907 134.203 84.5535 139.866 73 135.869" />
            <path d="M135 115L175.5 95M135 120.5H188.5M135 125L175.5 149.5" />
            <path d="M54.4877 125.545L13.9538 145.477M54.497 120.045L0.997079 119.955M54.5046 115.545L14.0462 90.9767"/>
          </g>
          <g id='pawn_l' fill={color.bodycolor}>
            <ellipse cx="62.5" cy="206.5" rx="14.5" ry="17.5" />
          </g>
          <g id='pawn_r' fill={color.bodycolor}>
            <ellipse cx="129.5" cy="206.5" rx="14.5" ry="17.5"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
