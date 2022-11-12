// import './App.css';
import Cards from './components/Card';
import Navbar from './components/Navbar';
function App() { 
  return (
    <>
      <Navbar />
    <div className="d-flex gap-4 mt-5 justify-content-center">
 
    <Cards 
    src="https://th.bing.com/th/id/OIP.4kSdlOKEQqdYroo_Bdg_dAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    prag="Data Types. Introduction to DataTypes. Strings. List. Tuples. Sets. Dictionary. Arrays."
    title="Python programming language"/> 

    <Cards 
    src="https://th.bing.com/th/id/OIP.4kSdlOKEQqdYroo_Bdg_dAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    prag="Data Types. Introduction to DataTypes. Strings. List. Tuples. Sets. Dictionary. Arrays."
    title="Python programming language"/>  

    <Cards 
    src="https://th.bing.com/th/id/OIP.4kSdlOKEQqdYroo_Bdg_dAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    prag="Data Types. Introduction to DataTypes. Strings. List. Tuples. Sets. Dictionary. Arrays."
    title="Python programming language"/>
  
    </div>
    </>
  );
}

export default App;
