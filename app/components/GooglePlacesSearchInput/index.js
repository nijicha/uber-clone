import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_API_KEY } from '@env'

import tw from '../../../lib/tailwind'

// Customization Style docs
// URL: https://github.com/FaridSafi/react-native-google-places-autocomplete
const styles = {
  container: { flex: 0 }, // Tailwindcss issue
  textInput: tw.style('mb-0 px-4 py-2 h-12 rounded-md text-base shadow-lg', {
    // Elevation API (Android Only)
    // Helpers: https://ethercreative.github.io/react-native-shadow-generator
    // Read more: https://developer.android.com/training/material/shadows-clipping.html#Elevation
    elevation: 4,
  }),
  poweredContainer: tw`hidden`,
}

const GooglePlacesSearchInput = () => {
  return (
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
  )
}

export default GooglePlacesSearchInput
