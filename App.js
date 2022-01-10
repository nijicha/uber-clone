import { Provider } from "react-redux"
import { store } from "./lib/store"
import HomeScreen from "./app/screens/HomeScreen"

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}
