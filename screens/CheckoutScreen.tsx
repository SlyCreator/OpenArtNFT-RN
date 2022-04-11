import { StackActions, useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../components/Button'
import StackScreen from '../components/StackScreen'

const CheckoutScreen = () => {
    const {dispatch} = useNavigation();
    const goPlaceOrder = ()=>{
        dispatch(StackActions.push('OrderConfirmation'))
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={tw`flex bg-white`}>
            <StackScreen style={tw`flex bg-white`}>
                <View>
                    <View>
                        <Button

                            title='Apply'
                            titleStyle={{
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                            onPress={goPlaceOrder}
                        />
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default CheckoutScreen
