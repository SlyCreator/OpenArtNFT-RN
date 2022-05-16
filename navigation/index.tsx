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
import HomeScreen from '../screens/HomeScreen'
import FirstScreen from '../screens/FirstScreen'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import ItemDetailsScreen from '../screens/ItemDetailsScreen'
import DiscoverCreatorScreen from '../screens/DiscoverCreatorScreen'



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
      <Stack.Screen name="DiscoverCreator" component={DiscoverCreatorScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} options={{headerShown:false}} />
      <Stack.Screen name="Welcome" component={FirstScreen} options={{ headerShown: false }} />
     </Stack.Navigator>
  )
}
