import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { StackActions, useNavigation } from '@react-navigation/core'

const FirstScreen = () => {
    const {dispatch} = useNavigation()

    const gotoLogin = ()=>{
        dispatch(StackActions.push('SignIn'))
    }
    const gotoSignUp = ()=>{
        dispatch(StackActions.push('SignUp'))
    }

    return (
        <View style={tw`flex-1 bg-white justify-center items-center`}>
            <Text style={tw`font-bold text-2xl `}>Hi, Welcome To Coffery</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style={tw`text-xl mx-4 mt-4`}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoSignUp}>
                    <Text style={tw`text-xl mx-4 mt-4`}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FirstScreen
