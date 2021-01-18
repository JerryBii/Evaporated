import React, {useState} from "react"
import Search from "./Components/Search"
import Result from "./Components/Result"
import NotFound from "./Components/NotFound"

function App() {
  const [renderScreen, setRenderScreen] = useState(0)
  
  function pageRender(curScreen) {
    setRenderScreen(curScreen)
  }

  let page = null

  if(renderScreen === 0 ){
    page = <Search render = {pageRender}/>
  }else if(renderScreen === 1){
    page = <Result />
  }else{
    page = <NotFound />
  }


  return (
    <div>
        {page}
    </div>
  );
}

export default App;
