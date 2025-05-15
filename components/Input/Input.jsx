import { View, TextInput, Text } from "react-native";
import { styles } from "./input.style";

export function Input(props) {
  return (
    <View style={styles.root}>
      <TextInput
        maxLength={4}
        defaultValue={props.defaultValue.toString()}
        style={styles.input}
        placeholder="Type Your Temperature"
        onChangeText={(e)=> {
            const value = parseInt(e);
            if (isNaN(value)) {
                props.onChange(0);
            } else {
                props.onChange(value);
            }

        }}
      ></TextInput>

      <Text style={styles.unit}>{props.unit}</Text>
    </View>
  );
}
