import { RoutesMain } from "./routes/RoutesMain"
import { ResetStyles } from "./styles/Reset"
import { GlobalStyles } from "./styles/Global"
import { UserProvider } from "./providers/UserContext"

function App() {
  return (
    <>
      <ResetStyles/>
      <GlobalStyles/>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </>
  )
}

export default App