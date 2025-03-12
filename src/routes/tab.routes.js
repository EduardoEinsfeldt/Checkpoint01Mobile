import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Result from "../screen/Result";

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='result' component={Result} />
        </Tab.Navigator>
    );
}