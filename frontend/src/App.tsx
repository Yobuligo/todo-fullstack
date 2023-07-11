import "./App.css";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { TodoFrame } from "./features/todoFrame/TodoFrame";

function App() {
  return (
    <AppContextProvider>
      <TodoFrame />
    </AppContextProvider>
  );
}

export default App;
