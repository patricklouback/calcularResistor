import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from "../screens/home";

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
        </Navigator>
    )
}