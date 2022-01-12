// Customization autocomplete input style
// Lib: https://github.com/FaridSafi/react-native-google-places-autocomplete
// Expo API Ref: https://docs.expo.dev/versions/v44.0.0/react-native/view/

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_API_KEY } from '@env'

import tw from '../../../lib/tailwind'
import { View } from 'react-native'

const styles = {
  container: { flex: 0 }, // Tailwindcss issue
  textInput: tw.style('mb-0 h-12 rounded text-base', {
    paddingVertical: 8,
    paddingHorizontal: 16,

    // Relevant to tailwindcss Box shadow: shadow-md
    // Tailwindcss | Box shadow: https://v2.tailwindcss.com/docs/box-shadow
    // Helpers: https://ethercreative.github.io/react-native-shadow-generator
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    // Elevation API (Android Only)
    // Read more: https://developer.android.com/training/material/shadows-clipping.html#Elevation
    elevation: 4,
  }),
  poweredContainer: tw`hidden`,
}

const GooglePlacesSearchInput = () => {
  return (
    <View style={tw`flex-col`}>
      <GooglePlacesAutocomplete
        styles={styles}
        placeholder={'Going to Mega Bang Na?'}
        minLength={2}
        autoFocus={false}
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: 'en', // TODO: implement user language later
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
    </View>
  )
}

export default GooglePlacesSearchInput
