import { View, Image, SafeAreaView } from 'react-native'

import tw from '../../lib/tailwind'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={tw.style('ml-2', {
            width: 100,
            height: 100,
            resizeMode: 'contain',
          })}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
