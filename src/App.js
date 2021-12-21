import styles from './App.module.css'
import Cat from './components/Cat'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState({
    bodycolor: 'grey',
    earcolor: 'pink',
    nosecolor: 'yellow',
    eyecolor: 'chocolate'
  })
  const [newColor, setNewColor] = useState({
    bodycolor: '',
    earcolor: '',
    nosecolor: '',
    eyecolor: ''
  })

   const handleColorChange = (event) => {
     setNewColor({...newColor, [event.target.id]: event.target.value})
      setColor({...color, [event.target.id]: event.target.value})
  } 
  console.log('color', color)


  return (
    <section>
      <header>
        <h1>When you just need to color a cat</h1>
      </header>
{/*   <nav></nav> */}
      <main>
        <ul className={styles.input_fields}>
          <li>
            <label for='bodycolor'>Choose color of body:</label>
            <input type='color' name='bodycolor' id='bodycolor' value={newColor.bodycolor} onChange={handleColorChange} />
          </li>
          <li>
            <label for='earcolor'>Choose color of ears:</label>
            <input type='color' name='earcolor' id='earcolor' value={newColor.earcolor} onChange={handleColorChange} />
          </li>
          <li>
            <label for='nosecolor'>Choose color of nose:</label>
            <input type='color' name='nosecolor' id='nosecolor' value={newColor.nosecolor} onChange={handleColorChange} />
          </li>
          <li>
            <label for='eyecolor'>Choose color of eyes:</label>
            <input type='color' name='eyecolor' id='eyecolor' value={newColor.eyecolor} onChange={handleColorChange} />
          </li>
        </ul>
        <div className={styles.cat_image}>
          <Cat color={color}/>
        </div>
      </main>
      {/* <footer></footer> */}
    </section>
  );
}

export default App;
