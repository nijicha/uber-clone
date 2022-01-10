import { StyleSheet, Text, SafeAreaView } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headers}>I`&apos;m the Home screen!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headers: {
    color: "#ff7613",
  },
})
