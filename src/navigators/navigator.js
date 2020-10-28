import 'react-native-gesture-handler';
import * as React from 'react';
import { useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './navigationActions';
import { SafeAreaProvider } from 'react-native-safe-area-context';  
import { isNotchPresent } from '../themes/common';
import { LoginScreen } from '../containers/authentication/LoginScreen';
import { CreateAccountScreen } from '../containers/authentication/CreateAccountScreen';
import { FeedScreen } from '../containers/feed/FeedScreen';
import { SettingsScreen } from '../containers/settings/SettingsScreen';
import { AddItemIcon } from '../components/buttons/AddItemIcon';
import Colors from '../themes/colors';
import { AddItemScreen } from '../containers/add_item/AddItemScreen';

// const homeIcon = require('../assets/tab_bar/home_icon.png');
// const settingsIcon = require('../assets/tab_bar/settings_icon.png');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const AddItemComponent = () => {
  return null;
};

function RootApp() {
  const user = useSelector((state) => state.user.id);
  console.log(user);
  const dispatch = useDispatch();


  function HomeStackComponent() {
    return (
      <HomeStack.Navigator
        headerMode="none"
        initialRouteName={'Feed'}>
        <HomeStack.Screen
          name="Feed"
          component={FeedScreen}
        />
      </HomeStack.Navigator>
    );
  }

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = '';
            let iconName = '';
            switch (route.name) {
              case 'Home':
                iconColor = focused ? Colors.activeIcon : Colors.inactiveButton;
                iconName = 'home';
                break;
              case 'Settings':
                iconColor = focused ? Colors.activeIcon : Colors.inactiveButton;
                iconName = 'settings'
                break;
              default:
                break;
            }

            return (
              <Icon
                name={iconName}
                type='feather'
                color={iconColor}
                size={32}
              />
            );
          },
        })}
        tabBarOptions={{
          allowFontScaling: true,
          showLabel: false,
          tabStyle: styles.tabStyle,
          style: styles.tabBarStyle,
        }}>
        <Tab.Screen name="Home" component={HomeStackComponent} />
        <Tab.Screen
          name="AddItem"
          component={AddItemComponent}
          options={{
            tabBarButton: (options) => <AddItemIcon {...options} />,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none" initialRouteName={'Home'}>
          {user ? (
            <>
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
            </>
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
