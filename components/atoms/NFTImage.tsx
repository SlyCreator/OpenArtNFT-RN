import React from 'react'
import { View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const NFTImage = () => {
    return (
        <View>
            <Image source={{
                uri: 'https://picsum.photos/id/15/200/300',
            }}
                style={tw`h-10 w-10 rounded-3xl mr-2`}

            />
        </View>
    )
}

export default NFTImage
