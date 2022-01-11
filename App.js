import { Provider } from "react-redux"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { store } from "./lib/store"
import "./lib/fontawesome"

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
