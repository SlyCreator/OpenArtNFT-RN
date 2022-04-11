import React from "react"
import { TouchableOpacity, View, Image, Text, GestureResponderEvent } from "react-native"
import tw from "tailwind-react-native-classnames"
import { Feather } from '@expo/vector-icons';

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
        <TouchableOpacity style={tw` `} onPress={onPress}>
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
                <View style={tw`flex-row justify-between pb-2`}>
                    <View style={tw`flex-row `}>
                        <Image source={{
                            uri: 'https://picsum.photos/id/15/200/300',
                        }}
                            style={tw`h-10 w-10 rounded-3xl mr-2`}

                        />
                        <View>
                            <Text style={tw`text-sm font-bold`}>Pawel Czerwinski</Text>
                            <Text style={tw`text-sm text-black mb-2`}>Creator</Text>
                        </View>
                    </View>
                    <Feather name="heart" size={24} color="black" style={tw`pr-10`} />
                </View>

            </View>


        </TouchableOpacity>
    )
}

export const SoldForCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 m-2 bg-white shadow-sm rounded-lg `}>
            <View>
                <Text style={tw`font-bold text-xl p-4`}>Sold For 2.00ETH</Text>
            </View>
        </TouchableOpacity>
    )
}