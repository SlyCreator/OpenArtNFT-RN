import { StackActions, useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../components/Button'
import StackScreen from '../components/StackScreen'

const OrderConfirmationScreen = () => {
    const {dispatch} =useNavigation()
    const goTrack = ()=>{
        dispatch(StackActions.replace('TrackOrder'))
    }
    const goHome = ()=>{
        dispatch(StackActions.replace('Home'))
    }
    return (
        <View>
                <StackScreen style={tw`bg-white flex-1`}>
            <View style={tw`bg-white flex-1`}>
                <View>
                    <Button
                     
                        title='Track Order'
                        titleStyle={{
                            color: '#FFF',
                            textTransform: 'none',
                            fontSize: 14
                        }}
                        onPress={goTrack}

                    />
                    <Button
                    
                        title='Back To Home'
                        titleStyle={{
                           // color: '#FFF',
                            textTransform: 'none',
                            fontSize: 14
                        }}
                        outline
                        onPress={goHome}

                    />
                </View>
            </View>
        </StackScreen>
    
        </View>
        )
}

export default OrderConfirmationScreen
