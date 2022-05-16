import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export interface CreatorCardProps {
    // onPress?(event?: GestureResponderEvent): void
    headerImageUri?: React.ReactNode | JSX.Element | any
    profileImage?: React.ReactNode | JSX.Element | any
    name: string
    body: string
    followers: number
    following: number
}

const CreatorCard = ({ headerImageUri, profileImage, name, body, followers, following }: CreatorCardProps) => {
    return (
        <TouchableOpacity style={tw`my-2 my-4 bg-white shadow-lg rounded-t-lg `}>
            <Image
                source={{ uri: headerImageUri }}
                style={tw`h-24 rounded-t-lg `}
                resizeMode="contain"
            />
            <Image
                source={{ uri: profileImage }}
                style={tw`w-20 h-20 self-center -mt-10 mb-2 rounded-full`} />
            <View style={tw`px-4`}>
                <View>
                <Text style={tw`text-center text-xl font-bold`}>{name}</Text>
                <Text style={tw`text-center`}>{body}</Text>
                </View>
                <View style={tw`justify-between`}>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-xl font-bold`}>{followers}</Text>
                        <Text>followers</Text>
                    </View>
                    <View>
                        <Text style={tw`font-bold`}>follow</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default CreatorCard
