import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'

const OrderScreen = () => {
    return (
     <ScrollView style={tw`flex-1 bg-white`}>
         <StackScreen>
         <View>
            <Text>OrderScreen</Text>
        </View>
         </StackScreen>
     </ScrollView>
    )
}

export default OrderScreen
