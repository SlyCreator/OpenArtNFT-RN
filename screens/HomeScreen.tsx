import React from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next'
import { StackActions, useNavigation } from '@react-navigation/core';
import { LongProductCard, SmallProductCard, SoldForCard } from '../components/Cards/ProductCard';
import OpenArtSvg from '../components/svgs/OpenArtSvg';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/InputField'
import InputField from '../components/InputField'
import { useState } from 'react'
import Button from '../components/Button';
import Footer from '../components/Footer';


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
    const goToItemDetail = () => {
        dispatch(StackActions.push('ItemDetails'))
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
                        <Text style={tw`text-lg font-semibold text-center p-4 text-gray-600`}>Discover, collect, and sell</Text>
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
                    <LongProductCard onPress={goToItemDetail} />
                    <View style={tw`py-4 flex-row`}>
                        <Text style={tw`text-base`}>Reserve Price </Text>
                        <Text style={tw`font-bold text-xl`}> 1.50 ETH</Text>
                    </View>
                    <View>
                        <Button
                            title='Place a bid'
                            titleStyle={{
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                        />
                        <Button
                            outline
                            title='Login'
                            titleStyle={{
                                color: '#000',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                        />
                    </View>
                    <View style={tw`flex-row`}>
                            <Text style={tw`text-base font-bold`}>Live auctions</Text>
                            <Button 
                            outline
                                title='Login'
                                titleStyle={{
                                    color:'#000',
                                    textTransform:'none',
                                    fontSize:14
                                }}
                            />
                    </View>
                    <View>
                        <View>
                            <LongProductCard  />
                            <SoldForCard />
                        </View>
                    </View>
                   
                    <View>
                        <Text>hot bid</Text>
                    </View>
                    <View>
                        <Text>Hot Coolection</Text>
                    </View>
                    <View>
                    <Button
                            outline
                            title='View more collection'
                            titleStyle={{
                                color: '#000',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                        />
                    </View>
                  <Footer />          
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