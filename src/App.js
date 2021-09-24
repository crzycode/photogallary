import react, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [image, setImage] = useState([])
  useEffect(() => {
    loadUser();
  }, [])
  const loadUser = async () => {
    const images = await axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
   setImage(images.data)
  } 
  return (
    <div className="App">
      <div className='row'>
      {image.map((image, index) =>(
        
          <div className='mb-10 col-sm-4 col-md-4 col-4'>
          <img className="shadow" src={image.urls.raw} alt={`image_${image.id}`} 
        height="400"
        width="300"/>
          </div> 
      ))
      }
      </div>
       </div>
  );
}

export default App;
