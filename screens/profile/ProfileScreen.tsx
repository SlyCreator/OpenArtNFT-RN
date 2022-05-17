import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StackScreen from '../../components/StackScreen'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileHeader from '../../components/ProfileHeader'
const data = [
    {
        id: "123",
        headerImageUri: 'https://picsum.photos/seed/picsum/1000/300',
        profileImage: 'https://picsum.photos/200/300',
        name: 'Kennedy Yank',
        body: 'Kennedy Yanko is an artist working in found metal and paint skin. Her methods reflect adual abstract expressionist-surr…',
        followers: 2024,
        following: 0,
    },
]

const ProfileScreen = () => {
    return (
        <ScrollView style={tw`flex-1 bg-white`} showsVerticalScrollIndicator={false}>
           
            <View>
         
                <ProfileHeader />
                <View style={tw`py-2 px-4`}>
                    
                    <View style={tw`flex-row justify-between items-center px-8`}>
                        <View>
                            <Text style={tw`font-bold text-2xl`}>150</Text>
                            <Text style={tw`text-base font-bold text-gray-500`}>Following</Text>
                        </View>
                        <View>
                            <Text style={tw`font-bold text-2xl`}>150</Text>
                            <Text style={tw`text-base font-bold text-gray-500`}>Following</Text>
                        </View>
                        <View>
                            <Feather name="edit-2" size={24} color="gray" />
                        </View>
                    </View>
                    <Text style={tw`text-center py-4`}>Member since 2021</Text>
                    <View style={tw`py-4 px-4`}>
                        <Text style={tw`font-bold text-lg text-center py-4`}>Your collection is empty</Text>
                        <Text style={tw`px-16 text-center`}>Start building your collection by placing bids on artwork.</Text>
                    </View>
                    <Button title='Explore OpenArt' outline />
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

export default ProfileScreen
