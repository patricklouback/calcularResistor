import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AjusteTL431 from "../screens/ajusteTL431";
import CalcularResistorParalelo from "../screens/calcularResistorParalelo";
import Home from "../screens/home";

const { Screen, Navigator } = createNativeStackNavigator();

export function Routes(){
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'home'
                component={Home}
            />
            <Screen
                name = 'resistorParalelo'
                component={CalcularResistorParalelo}
            />
            <Screen
                name = 'ajusteTL431'
                component={AjusteTL431}
            />
        </Navigator>
    )
}