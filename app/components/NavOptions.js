import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { useNavigation } from "@react-navigation/native"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"

import tw from "../../lib/tailwind"

const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order a food",
    image: "https://links.papareact.com/28w",
    screen: "FoodDeliveryScreen", // Change in future
  },
]

const NavOptions = () => {
  const navigation = useNavigation()

  return (
    <FlatList
      horizontal
      scrollEnabled={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pt-4 pb-8 pl-6 bg-gray-200 m-2 w-40 rounded-md`}
          onPress={() => {
            navigation.navigate(item.screen)
          }}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

            <View
              style={tw`flex flex-row justify-center items-center mt-4 p-2 w-10 h-10 bg-black rounded-full`}
            >
              <FontAwesomeIcon
                icon={["fal", "arrow-right"]}
                size={20}
                style={tw`text-white`}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
