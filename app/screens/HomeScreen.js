import { View, Image, SafeAreaView } from 'react-native'

import tw from '../../lib/tailwind'
import NavCards from '../components/NavCards'
import GooglePlacesSearchInput from '../components/GooglePlacesSearchInput'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-7 h-full`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesSearchInput />
        <NavCards />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
