import React from "react"
import { TouchableOpacity, View, Image, Text, GestureResponderEvent } from "react-native"
import tw from "tailwind-react-native-classnames"

export interface ProductCardPros {
    onPress?(event?: GestureResponderEvent): void
    imageUri?: React.ReactNode | JSX.Element | any
    name?: string
    cost?: string
}

export const SmallProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 m-2 bg-white shadow-sm rounded-lg `}>
            <View style={tw``}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{name}</Text>

            </View>
        </TouchableOpacity>
    )
}
export const MeduimProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`mr-5 p-4 rounded-lg bg-white shadow-lg`} onPress={onPress}>
            <View>
                <Image
                    style={{ width: 120, height: 120, resizeMode: 'contain', }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{name}</Text>

            </View>
        </TouchableOpacity>
    )
}

export const LongProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 m-2 bg-white shadow-sm rounded-lg `}>
            <View style={tw``}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{name}</Text>

            </View>
        </TouchableOpacity>
    )
}