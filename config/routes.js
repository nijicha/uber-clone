import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../app/screens/HomeScreen"
import MapScreen from "../app/screens/MapScreen"
import FoodDeliveryScreen from "../app/screens/FoodDeliveryScreen"

export default function Routes() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FoodDeliveryScreen"
        component={FoodDeliveryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
