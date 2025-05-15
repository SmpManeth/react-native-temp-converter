import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.style";
import { SafeAreaView, Text } from "react-native";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <Text>Hello, this is a sample text!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
