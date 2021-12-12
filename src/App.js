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
    <section className={styles.container}>
      <header>
        <h1 className={styles.heading}>When you just need to color a cat</h1>
      </header>
{/*   <nav></nav> */}
      <main>
        <div className={styles.input_fields}></div>
          <label for='bodycolor' className={styles.lable}>Choose color of body:</label>
          <input type='color' name='bodycolor' id='bodycolor' value={newColor.bodycolor} onChange={handleColorChange} />
          <br/>
          <label for='earcolor' className={styles.lable}>Choose color of ears:</label>
          <input type='color' name='earcolor' id='earcolor' value={newColor.earcolor} onChange={handleColorChange} />
          <br/>
          <label for='nosecolor' className={styles.lable}>Choose color of nose:</label>
          <input type='color' name='nosecolor' id='nosecolor' value={newColor.nosecolor} onChange={handleColorChange} />
          <br/>
          <label for='eyecolor' className={styles.lable}>Choose color of eyes:</label>
          <input type='color' name='eyecolor' id='eyecolor' value={newColor.eyecolor} onChange={handleColorChange} />
        <div className={styles.cat_image}>
          <Cat color={color}/>
        </div>
      </main>
      {/* <footer></footer> */}
    </section>
  );
}

export default App;
