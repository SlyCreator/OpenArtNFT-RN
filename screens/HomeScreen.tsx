import React from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next'
import { StackActions, useNavigation } from '@react-navigation/core';
import { SmallProductCard } from '../components/Cards/ProductCard';


const data = [
    {
        id: "123",
        title: "Capuccino",
        image: "https://picsum.photos/id/431/300/300/",

    },
    {
        id: "456",
        title: "Espresso",
        image: "https://picsum.photos/id/1060/200/200/",

    },
    {
        id: "1223",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",

    },
    {
        id: "4562",
        title: "Order",
        image: "https://picsum.photos/id/1060/200/200/",

    }
]

const HomeScreen = () => {
    const { dispatch } = useNavigation();

    const goCart = () => {
        dispatch(StackActions.push('Cart'))
    }
    return (
        <ScrollView style={tw`flex-1  bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>
                    <View><Text>Logo</Text></View>
                    <View><Text>Hero Text</Text></View>
                    <View><Text>Search</Text></View>
                    <View><Text>card</Text></View>
                    <View><Text>button</Text><Text>Button 2</Text></View>
                    <View><Text>Live autions</Text></View>
                    <View>
                        <View><Text>sold Card and buuton</Text></View>
                        <View><Text>sold Card and buuton</Text></View>
                    </View>
                    <View>
                        <View><Text>InBid Card and buuton</Text></View>
                        <View><Text>InCard and buuton</Text></View>
                    </View>
                    <View>
                        <Text>hot bid</Text>
                    </View>
                    <View>
                        <Text>Hot Coolection</Text>
                    </View>
                    <View>
                        <Text>View More</Text>
                    </View>
                    <View>
                        <Text>Earn now Card and button</Text>
                    </View>
                    <View>
                        <Text>Footer</Text>
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default HomeScreen
