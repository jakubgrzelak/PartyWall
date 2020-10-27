import 'react-native-gesture-handler';
import * as React from 'react';
import { useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './navigationActions';
import { SafeAreaProvider } from 'react-native-safe-area-context';  
import { isNotchPresent } from '../themes/common';
import { LoginScreen } from '../containers/authentication/LoginScreen';
import { CreateAccountScreen } from '../containers/authentication/CreateAccountScreen';

// const homeIcon = require('../assets/tab_bar/home_icon.png');
// const settingsIcon = require('../assets/tab_bar/settings_icon.png');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const AddItemComponent = () => {
  return null;
};

function RootApp() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  // function HomeStackComponent() {
  //   return (
  //     <HomeStack.Navigator
  //       headerMode="none"
  //       initialRouteName={'DogDetailsScreen'}>
  //       <HomeStack.Screen
  //         name="DogDetailsScreen"
  //         component={DogDetailsScreen}
  //       />
  //     </HomeStack.Navigator>
  //   );
  // }

  // function Tabs() {
  //   return (
  //     <Tab.Navigator
  //       screenOptions={({ route }) => ({
  //         tabBarIcon: ({ focused, color, size }) => {
  //           let iconSource = {};
  //           switch (route.name) {
  //             case 'Home':
  //               // iconSource = focused ? homeIcon : homeIcon;
  //               break;
  //             case 'Settings':
  //               // iconSource = focused ? settingsIcon : settingsIcon;
  //               break;
  //             default:
  //               break;
  //           }

  //           return <Image style={styles.tabBarIconStyle} source={iconSource} />;
  //         },
  //       })}
  //       tabBarOptions={{
  //         allowFontScaling: true,
  //         showLabel: false,
  //         tabStyle: styles.tabStyle,
  //         style: styles.tabBarStyle,
  //       }}>
  //       <Tab.Screen name="Home" component={HomeStackComponent} />
  //       <Tab.Screen
  //         name="AddPet"
  //         component={AddPetComponent}
  //         options={{
  //           tabBarButton: (options) => <AddPetTabBarIcon {...options} />,
  //         }}
  //       />
  //       <Tab.Screen name="Settings" component={SettingsScreen} />
  //     </Tab.Navigator>
  //   );
  // }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none" initialRouteName={'Home'}>
          {user ? (
            <></>
          ) : (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootApp;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: isNotchPresent ? 74 : 50,
    borderTopWidth: 2,
    borderTopColor: '#EAEBF0',
  },
  tabStyle: {
    paddingTop: 3,
  },
});
