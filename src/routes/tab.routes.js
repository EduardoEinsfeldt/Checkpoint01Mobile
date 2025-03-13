import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screen/Home';
import Resultado from '../screen/Resultado';

const Tab = createBottomTabNavigator()

export default function TabRoutes({ route }) {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={route?.params?.initialRouteName || "tabHome"}
        >
            <Tab.Screen name='tabHome' component={Home}
                options={{
                    tabBarIcon: () => <Feather name='home' size={20} />,
                    tabBarLabel: "Início", tabBarActiveBackgroundColor: 'gold'
                }}
            />
            <Tab.Screen name='tabResultado' component={Resultado}
                options={{
                    tabBarIcon: () => <Feather name='checkcircle' size={20} />,
                    tabBarLabel: "Resultado", tabBarActiveBackgroundColor: 'gold'
                }}
            />
        </Tab.Navigator>
    )
}