
import { BrowserRouter, Routes, Route } from "react-router-dom";

// VIEWS 
import { Home } from "./views/Home";

function App() {


  return (
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ 

          <>
            <h2 className="titulo">App - CRUD</h2>
            <Home />
          </>

         }/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
