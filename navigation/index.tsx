import { Feather, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  TabRouter,
} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack'
import * as React from 'react'
// import { useTranslation } from 'react-i18next'
import { RootStackParamList } from '../types'
import { goBack, navigationRef, route } from './globalNavigation'
import { ColorSchemeName, Pressable, Text, View } from 'react-native'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import FirstScreen from '../screens/FirstScreen'
import MenuScreen from '../screens/MenuScreen'
import OrderScreen from '../screens/OrderScreen'
import ProfileScreen from '../screens/ProfileScreen'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import CartScreen from '../screens/CartScreen'
import CheckoutScreen from '../screens/CheckoutScreen'
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen'



export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      ref={navigationRef}

      theme={colorScheme != 'light' ? DarkTheme : DefaultTheme}
      onStateChange={(state) => {
        route.next(state?.routes[state.index])
      }
      }
    >
      <RootNavigator initialRouteName={'Root'} />
    </NavigationContainer>
  )
}

interface RootNavigationProps {
  initialRouteName: keyof RootStackParamList
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Header = (props: NativeStackHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#FFF',
      }}
    >
      <View style={{ width: '30%', justifyContent: 'center' }}>
        <Pressable
          onPress={() => {
            goBack()
          }}
        >
          <Feather name={'arrow-left'} size={25} />
        </Pressable>
      </View>
      <View style={{ width: '10%', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {props.options.title}
        </Text>
      </View>
    </View>
  )
}

export function RootNavigator({ initialRouteName }: RootNavigationProps) {
  return (
    <Stack.Navigator >
            <Stack.Screen name="Home" component={BottomTabNavigator}   options={{headerShown:false}}/>

      <Stack.Screen name="Welcome" component={FirstScreen} options={{ headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}   options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Root" component={BottomTabNavigator}   options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen} options={{title:'Shopping Cart', headerShown:true}} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{title:'CheckOut',headerShown : true}} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootStackParamList>()


function BottomTabNavigator() {
  const [state, setState] = React.useState<string>()
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#4B4780',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F8F7F7',
          padding: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route: route1 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SimpleLineIcons name="home" size={24} color={color} />
                <Text style={{ color, textAlign: 'center' }}>Home</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={({ route: route2 }) => {
          return {
            title: 'Menu',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Feather name="coffee" size={24} color={color} />
                <Text style={{ color, textAlign: 'center' }}>Menu</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        options={({ route: route3 }) => {
          return {
            title: 'Order',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="list-alt" size={24} color={color} />
                <Text style={{ color, textAlign: 'center' }}>Order</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route: route4 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center',...[tw`mb-2`] }}>
                <MaterialCommunityIcons name="account-circle" size={20} color={color} />
                <Text style={{ color, textAlign: 'center' }}>Profile</Text>
              </View>
            ),
          }
        }}
      />



    </BottomTab.Navigator>
  )
}



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  )
}
