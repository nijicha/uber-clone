import { Provider } from "react-redux"
import { store } from "./lib/store"
import { SafeAreaProvider } from "react-native-safe-area-context"

import HomeScreen from "./app/screens/HomeScreen"

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  )
}
