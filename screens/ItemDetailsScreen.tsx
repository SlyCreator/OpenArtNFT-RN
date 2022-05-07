import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import OpenArtSvg from '../components/svgs/OpenArtSvg'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import EtherscanSvg from '../components/EtherScanSvg'
const ItemDetailsScreen = () => {
    return (
        <ScrollView style={{backgroundColor:'#EDEDED'}}showsVerticalScrollIndicator={false}>
            <StackScreen style={{backgroundColor:'#EDEDED'}}>
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
                    <View style={tw`py-4 flex-row justify-between`}>
                        <Text style={tw`text-lg font-bold`}>Silent Color</Text>
                        <View style={tw`flex-row `}>
                            <AntDesign name="hearto" size={20} color="black" style={tw`pr-4`} />
                            <AntDesign name="upload" size={20} color="black" style={tw`pr-4`} />

                        </View>
                    </View>
                    <View>
                        <Text style={tw`text-base font-bold`}>@Openart</Text>
                    </View>
                    <View>
                        <Text style={tw`text-sm py-1`}>
                            Together with my design team, we designed this
                            futuristic Cyberyacht concept artwork. We wanted to create
                            something that has not been created yet, so we started to
                            collect ideas of how we imagine the Cyberyacht could look
                            like in the future.
                        </Text>
                        <View style={tw`flex-row pr-2 my-2`}>
                            <Text style={tw`text-sm text-gray-400 border-2 rounded-lg p-0.5 border-gray-400 mr-2`}>#color</Text>
                            <Text style={tw`text-sm text-gray-400 border-2 rounded-lg p-0.5 border-gray-400 mr-2`}>#circle</Text>
                            <Text style={tw`text-sm text-gray-400 border-2 rounded-lg p-0.5 border-gray-400 mr-2`}>#black</Text>
                            <Text style={tw`text-sm text-gray-400 border-2 rounded-lg p-0.5 border-gray-400 mr-2`}>#art</Text>
                        </View>
                    </View>
                    <View>
                        <View style={tw`flex-row justify-between py-4 bg-white rounded px-2`}>
                            <View style={tw`flex-row`}>
                                <EtherscanSvg />
                                <Text style={tw`text-base font-bold ml-4`}>View on Etherscan</Text>
                            </View>
                            <EvilIcons name="external-link" size={24} color="black" />
                        </View>
                       
                        <View style={tw`flex-row justify-between py-4 bg-white rounded px-2`}>
                            <View style={tw`flex-row`}>
                                <EtherscanSvg />
                                <Text style={tw`text-base font-bold ml-4`}>View on Etherscan</Text>
                            </View>
                            <EvilIcons name="external-link" size={24} color="black" />
                        </View>
                        <View style={tw`flex-row justify-between py-4 bg-white rounded px-2`}>
                            <View style={tw`flex-row`}>
                                <EtherscanSvg />
                                <Text style={tw`text-base font-bold ml-4`}>View on Etherscan</Text>
                            </View>
                            <EvilIcons name="external-link" size={24} color="black" />
                        </View>
                    </View>

                    <View>
                        <Text>Reserve Price</Text>
                        <Text>1.50 ETH $2.683.73</Text>
                        <Text>
                            Once a bid has been placed and the
                            reserve price has been met, a 24 hour
                            auction for this artwork will begin.
                            </Text>
                    </View>
                    <Text>Activity</Text>
                    <View>
                        <View></View>
                        <View>
                            <Text>Bid place by @pawel09</Text>
                            <Text>June 06,2021 at 12:00am</Text>
                            <Text>1.59 ETH</Text>
                        </View>
                        <View></View>
                    </View>
                </View>
            </StackScreen>
        </ScrollView>

    )
}

export default ItemDetailsScreen
