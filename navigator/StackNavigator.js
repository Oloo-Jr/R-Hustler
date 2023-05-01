import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen'
import AcceptedRequest from '../screen/acceptedRequest';
import DeliveryScreen from '../screen/deliveryScreen';

import LoginScreen from '../screen/LoginScreen';

import GigScreen from '../screen/GigScreen';


const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>



<Home.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="GigScreen"
                component={GigScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="AcceptedRequest"
                component={AcceptedRequest}
                options={{ headerShown: false }}
            />

<Home.Screen
                name="DeliveryScreen"
                component={DeliveryScreen}
                options={{ headerShown: false }}
            />



        </Home.Navigator>
    )
}