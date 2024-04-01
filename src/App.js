import { useState } from "react";
import { HowToPlay } from "./components/HowToPlay";
import { StartMenu } from "./components/StartMenu";
import { Game } from "./components/Game";
import { CategoryPicker } from "./components/CategoryPicker";


function App() {
  const [page, setPage] = useState('');
  const [category, setCategory] = useState('');
  return (
    <div className="App">
      <div className="background h-[100vh] w-[100vw] flex flex-col items-center justify-center">
        {page === '' && <StartMenu setPage={setPage}/>}
        {page ==='HowToPlay' && <HowToPlay setPage={setPage}/>}
        {page ==='CategoryPicker' && <CategoryPicker setPage={setPage} setCategory={setCategory}/>}
        {page ==='Game' && <Game setPage={setPage} category={category}/>}
      </div>
    </div>
  );
}

export default App;
