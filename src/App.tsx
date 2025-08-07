import { CatProvider } from "./context/CatContext";
import VotePage from "./pages/VotePage";
import { Toaster } from 'sonner'

function App() {
  return (
    <CatProvider>
      <VotePage />
      <Toaster
        richColors
        position="bottom-right"
      />
    </CatProvider>
  )
}

export default App
