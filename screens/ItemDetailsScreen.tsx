import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import OpenArtSvg from '../components/svgs/OpenArtSvg'

const ItemDetailsScreen = () => {
    return (
        <ScrollView style={tw` bg-white`} showsVerticalScrollIndicator={false}>
        <StackScreen style={tw`flex-1 bg-white mx-2`}>
            <View>
                <View style={tw`justify-between flex-row`}>
                    <OpenArtSvg />
                    <Ionicons name="menu-outline" size={30} color="black" />
                   
                </View>
                <View>
                    <Image source={{
                        uri: 'https://picsum.photos/id/15/200/300',
                    }}
                        // style={tw`h-48 rounded-xl`}
                        style={{
                            width: 315,
                            height: 300,
                            borderRadius: 12,

                        }}
                    />
                    </View>
                    
             </View>
        </StackScreen>
    </ScrollView>

    )
}

export default ItemDetailsScreen
