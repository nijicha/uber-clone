import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import tw from '../../../lib/tailwind'

const data = [
  {
    id: 123,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 456,
    title: 'Order a food',
    image: 'https://links.papareact.com/28w',
    screen: 'FoodDeliveryScreen', // Change in future
  },
]

const NavCards = () => {
  const navigation = useNavigation()

  return (
    <View style={tw`flex-initial`}>
      <FlatList
        contentContainerStyle={tw`flex-1 justify-between mt-4`}
        horizontal
        scrollEnabled={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-shrink pt-4 pr-2 pb-8 pl-6 w-40 rounded-md bg-gray-100`}
            onPress={() => {
              navigation.navigate(item.screen)
            }}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

              <View
                style={tw`flex justify-center items-center mt-4 p-2 w-10 h-10 rounded-full bg-black`}
              >
                <FontAwesomeIcon
                  icon={['fal', 'arrow-right']}
                  size={20}
                  style={tw`text-white`}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={tw`flex-grow`} />}
      />
    </View>
  )
}

export default NavCards
