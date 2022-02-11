import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Auct/>
      <Text style={styles.text}>Opeddn up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function Auct() {
  return (
    <View>
      <h1>What are you looking for?</h1>
      <TextInput style={styles.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a11',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000',
  },
  text: {
    color: 'aquamarine',
  },
});
