import { CatProvider } from "./context/CatContext";
import VotePage from "./pages/VotePage";

function App() {
  return (
    <CatProvider>
      <VotePage />
    </CatProvider>
  )
}

export default App
