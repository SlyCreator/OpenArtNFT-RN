import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../components/Button'
import CreatorCard from '../components/Cards/CreatorCard'
import Creator from '../components/Cards/CreatorCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import StackScreen from '../components/StackScreen'

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
    {
        id: "1223",
        headerImageUri: 'https://picsum.photos/seed/picsum/1000/300',
        profileImage: 'https://picsum.photos/200/300',
        name: 'Kennedy Yank',
        body: 'Kennedy Yanko is an artist working in found metal and paint skin. Her methods reflect adual abstract expressionist-surr…',
        followers: 2024,
        following: 0,
    },
    {
        id: "1233",
        headerImageUri: 'https://picsum.photos/seed/picsum/1000/300',
        profileImage: 'https://picsum.photos/200/300',
        name: 'Kennedy Yank',
        body: 'Kennedy Yanko is an artist working in found metal and paint skin. Her methods reflect adual abstract expressionist-surr…',
        followers: 2024,
        following: 0,
    }
    
]


const DiscoverCreatorScreen = () => {
    return (
        <ScrollView style={tw` bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>
                    <Header />
                    <View style={tw` items-center px-4`}>
                        <Text style={tw`py-2 text-xl font-bold`}>Discover creator</Text>
                        <Text style= {tw`text-sm px-14 text-center py-2`}>Follow at least fiver creators to
                             build your feed</Text>
                    </View>
                    <View style={tw`flex-row py-4`}>
                        <Text>Feature Creator</Text>
                        <Text>All Creator</Text>
                    </View>
                    
                    <View>
                        <FlatList 
                            data={data}
                            renderItem={({item})=>(
                                <CreatorCard 
                                    name ={item.name}
                                    body ={item.body}
                                    headerImageUri={item.headerImageUri}
                                    profileImage={item.profileImage}
                                    followers={item.followers}
                                    following={item.following}
                                    key={item.id}

                                />
                            )}
                        />
                        <Button title='Load more' outline/>
                    </View>
                    <Footer />
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default DiscoverCreatorScreen
