
// import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    
    <div className='d-flex gap-4 mt-3 justify-content-center'>
 
    <Cards
    
    src="https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?pid=ImgDet&rs=1"
    title="Javascript"
    prag = "Hello have anice  day"
    />
    <Cards 
      src="https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?pid=ImgDet&rs=1"
      title="Javascript"
      prag = "Hello have anice  day"/>
    <Cards 
      src="https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?pid=ImgDet&rs=1"
      title="Javascript"
      prag = "Hello have anice  day"/>
 
    </div>
    </>
  );
}

export default App;
