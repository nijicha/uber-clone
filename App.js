import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import Routes from './config/routes'
import { store } from './lib/store'
import './lib/fontawesome'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
