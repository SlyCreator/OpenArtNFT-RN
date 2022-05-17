import { Feather, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import ProfileHeader from '../../components/ProfileHeader'
import CallSvg from '../../components/svgs/icons/CallSvg'

const CreatorProfile = () => {
    return (
        <ScrollView style={tw`flex-1 bg-gray-50`} showsVerticalScrollIndicator={false}>
            <ProfileHeader />
            <View style={tw`bg-white rounded-lg mx-4 my-6 py-4 px-6`}>
                <View style={tw`flex-row py-2`}>
                    <SimpleLineIcons name="envelope" size={18} color="black" />
                    <Text style={tw`pr-12 pl-4`}>Contact@OpenArt.design</Text>
                    <Feather name="edit-2" size={14} color="gray" />
                </View>
                <View style={tw`flex-row py-2`}>
                    <SimpleLineIcons name="credit-card" size={18} color="black" />
                    <Text style={tw`pl-4`}>Linked</Text>
                </View>
                <View style={tw`flex-row py-2`}>
                    <CallSvg />
                    <Text style={tw`pl-4`}>(+60) 263 456 78</Text>
                </View>
                <View style={tw`flex-row py-2`}>
                    <MaterialCommunityIcons name="link-variant" size={24} color="black" />
                    <Text style={tw`pl-4`}>OpenArt.design</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default CreatorProfile
