import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import '@fontsource/roboto'; 

function App(){
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <HomePage/>
       <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App