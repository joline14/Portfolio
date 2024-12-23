import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import '@fontsource/roboto'; 

function App(){
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <HomePage/>
      </BrowserRouter>
    </div>
  ); 
}

export default App