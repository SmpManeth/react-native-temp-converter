import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonConvert.style";
export function ButtonConvert(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttontxt}>Convert to {props.unit}</Text>
    </TouchableOpacity>
  );
}
