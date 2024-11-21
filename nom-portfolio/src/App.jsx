import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import '@fontsource/roboto'; 

function App(){
  return (
    <div className="App">
      <BrowserRouter future={{v7_startTransition: true,v7_relativeSplatPath: true,}}>
       <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App