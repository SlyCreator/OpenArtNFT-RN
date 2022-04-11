import React from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next'
import { StackActions, useNavigation } from '@react-navigation/core';
import { SmallProductCard } from '../components/Cards/ProductCard';
import OpenArtSvg from '../components/svgs/OpenArtSvg';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/InputField'
import InputField from '../components/InputField'
import { useState } from 'react'


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
    const [value, setValue] = useState({
        search: ''
    })
    const goCart = () => {
        dispatch(StackActions.push('Cart'))
    }
    return (
        <ScrollView style={tw` bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>
                    <View style={tw`justify-between flex-row`}>
                        <OpenArtSvg />
                        <Ionicons name="menu-outline" size={30} color="black" />
                    </View>
                    <View>
                        <Text style={tw`text-lg font-semibold text-center p-4 text-slate-200`}>Discover, collect, and sell</Text>
                        <Text style={tw`text-xl font-bold  text-center `}>Your DIgital Art</Text>
                    </View>
                    <View>
                        <InputField inputProps={{
                            placeholder: 'Search items, collections, and accounts',

                            onChangeText: (search) => {
                                setValue({ ...value, search })
                            },
                            keyboardType: 'email-address',
                            textStyle: { fontSize: 16 },
                            value: value.search,
                            style: styles.input,
                        }} />
                    </View>
                    <View style={tw`shadow-lg p-2 bg-white rounded-xl`}>
                        <View>
                            <Image source={{
                                uri: 'https://picsum.photos/id/15/200/300',
                            }}
                                // style={tw`h-48 rounded-xl`}
                                style={{
                                    width: 300,
                                    height: 300,
                                    borderRadius: 12,

                                }}
                            />
                        </View>
                        <Text style={tw`text-lg py-2 font-bold`}>Silent Wave</Text>
                        <View style={tw`flex-row`}>
                            <Image source={{
                                uri: 'https://picsum.photos/id/15/200/300',
                            }}
                                style={tw`h-8 w-8 rounded-3xl`}

                            />
                            <View>
                                <Text style={tw`text-sm font-bold`}>Pawel Czerwinski</Text>
                                <Text style={tw`text-sm text-grap-200`}>Creator</Text>
                            </View>
                        </View>
                        <Feather name="heart" size={24} color="black" />
                    </View>
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
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    }
})