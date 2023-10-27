import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AssetScreen from '../screens/AssetScreen';
import BrowseScreen from '../screens/BrowseScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false,}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Asset"  options={{animation:'slide_from_bottom'}} component={AssetScreen} />
                <Stack.Screen name="Browse" component={BrowseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
