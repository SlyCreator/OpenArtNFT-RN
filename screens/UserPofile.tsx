import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import OpenArtSvg from '../components/svgs/OpenArtSvg'

const UserPofile = () => {
    return (
        <ScrollView style={tw` bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>
                    <View style={tw`justify-between flex-row`}>
                        <OpenArtSvg />
                        <Ionicons name="menu-outline" size={30} color="black" />

                    </View>
                    <View>

                        <Text>Image and icon by the left</Text>
                    </View>
                    <View>
                        <Text>Gift Habeshaw</Text>
                        <Text>xmcsmmsmmsm</Text>
                    </View>
                    <View>
                        <View>
                            <Text>5150</Text>
                            <Text>Following</Text>
                        </View>
                        <View>
                            <Text>2024</Text>
                            <Text>Follower</Text>
                        </View>
                        <View>
                            <Text>Follow</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Followed by</Text>
                    </View>
                    <View>
                        <Text>
                            Trevor Jackson is a multi-disciplinary
                            artist exploring analog + digital realms since 1988.
                            Collaborators inc Apple,
                            BMW, Comme Des Garçons, ICA, NTS, Sonos,
                            Stone Island, Tate Modern + Warp.
                        </Text>
                        <Text>
                        Member since  2021
                        </Text>
                    </View>
                    <View>
                        <View><Text>@OpenArt</Text></View>
                        <View><Text>@OpenArt</Text></View>
                        <View><Text>@OpenArt</Text></View>
                    </View>
                    <View>
                        <Text>Created</Text>
                        <Text>Collected</Text>
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default UserPofile
