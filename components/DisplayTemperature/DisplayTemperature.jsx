import { Text } from "react-native";
import { styles } from "./DisplayTemperature.style";

export function DisplayTemperature(props) {
    return (
        <Text style={ styles.temperatureTxt}>
            {props.temperature.toFixed(1)} {props.unit}
        </Text>
    );
}