import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import HomeScreen from "../src/pages/HomeScreen";

const screens = {
    LoginScreen: {
        screen: Login,
    },
    RegisterScreen: {
        screen: Register,
    },
    HomePage: {
        screen: HomeScreen,
    },
}
const homeStack = createStackNavigator(
    screens,
    { initialRouteName: 'RegisterScreen' }
);

export default createAppContainer(homeStack);