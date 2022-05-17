import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View,Image, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Header from './Header'

const ProfileHeader = () => {
    return (
        <View>
               <Header />
            <Image
                    source={{ uri: 'https://picsum.photos/seed/picsum/1200/400' }}
                    style={tw`h-32 `}
                    resizeMode="contain"
                />
                <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={tw`w-20 h-20 self-center -mt-10 mb-2 rounded-full`}
                />
                <View style={tw`items-center py-2`}>
                        <Text style={tw`font-bold text-lg`}>Gift Habeshaw</Text>
                        <Text>52fs5ge5g45sov45a <MaterialCommunityIcons name="content-copy" size={10} color="black" /></Text>
                    </View>
        </View>
    )
}

export default ProfileHeader
