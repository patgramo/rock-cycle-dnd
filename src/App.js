import {DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div className="app">
          <DragDrop />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
