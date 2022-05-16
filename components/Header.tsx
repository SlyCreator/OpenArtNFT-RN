import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import OpenArtSvg from './svgs/OpenArtSvg'
const Header = () => {
    return (
        <View>
            <View style={tw`justify-between flex-row`}>
                        <OpenArtSvg />
                        <Ionicons name="menu-outline" size={30} color="black" />

                    </View>
        </View>
    )
}

export default Header
