import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <View>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" />
      </Stack.Navigator>
    </View>
  );
};

export {Router};
