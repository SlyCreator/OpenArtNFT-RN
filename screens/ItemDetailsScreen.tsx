import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
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
                    <View>
                        <Text>Silenet Color</Text>
                    </View>
                    <View>
                        <Text>@Openart</Text>
                    </View>
                    <View>
                        <Text>
                            Together with my design team, we designed this
                            futuristic Cyberyacht concept artwork. We wanted to create
                            something that has not been created yet, so we started to
                            collect ideas of how we imagine the Cyberyacht could look
                            like in the future.
                        </Text>
                        <View>
                            <Text>#color</Text>
                            <Text>#color</Text>
                            <Text>#color</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>View on EtherScan</Text>
                        </View>
                        <View>
                            <Text>View on IPFS</Text>
                        </View>
                        <View>
                            <Text>View on IPFS Metadata</Text>
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
