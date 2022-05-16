import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import OpenArtSvg from '../components/svgs/OpenArtSvg'

const DiscoverCreatorScreen = () => {
    return (
        <ScrollView style={tw` bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>
                    
                    <View>
                        <Text>Discover creator</Text>
                        <Text>Follow at least fiver creators to
                             build your feed</Text>
                    </View>
                    <View>
                        <Text>Feature Creator</Text>
                        <Text>All Creator</Text>
                    </View>
                    <View>
                        <Text>Kennedy Yanko</Text>
                        <Text>Kennedy Yanko is an artist working
                        in found metal and paint skin. Her methods reflect a
                              dual abstract expressionist-surr…</Text>
                              <View>
                                  <Text>2024</Text>
                                  <Text>followers</Text>
                                  <Text>follow</Text>
                              </View>

                    </View>
                    <View>
                        <Text>Load more</Text>
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default DiscoverCreatorScreen
