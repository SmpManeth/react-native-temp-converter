import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.style";
import { SafeAreaView, Text, View, ImageBackground } from "react-native";
import HotBackground from "./assets/hot.png"
import ColdBackground from "./assets/cold.png"
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { convertTemperatureTo, getOppositUnit } from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {

  const[inputValue , setInputValue] = useState(0);
  const[currentUnit , setCurrentUnit] = useState("°C");
  const oppositUnit = getOppositUnit(currentUnit);


  return (
    <ImageBackground style={styles.backgroundImage} source={HotBackground} >
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.workspace}>
           <DisplayTemperature unit={oppositUnit} temperature={convertTemperatureTo(inputValue , oppositUnit)} />
            <Input unit={currentUnit} onChange={setInputValue} defaultValue={inputValue}></Input>
            <ButtonConvert onPress={()=> {
              setCurrentUnit(oppositUnit);
            }} unit={currentUnit}/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
