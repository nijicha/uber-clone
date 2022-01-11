import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import { Icon } from "react-native-elements"

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
  return (
    <FlatList
      horizontal
      scrollEnabled={false}
      // showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pt-4 pb-8 pl-6 bg-gray-200 m-2 w-40`}>
          <View style={{}}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`mt-4 p-2 w-10 bg-black rounded-full`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
