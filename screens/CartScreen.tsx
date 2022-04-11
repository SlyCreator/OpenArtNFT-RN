import { StackActions, useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../components/Button'
import { LongProductCard } from '../components/Cards/ProductCard'
import InputField from '../components/InputField'
import StackScreen from '../components/StackScreen'



const data = [
    {
        id: "1323",
        title: "Capuccino",
        image: "https://picsum.photos/id/431/300/300/",

    },
    {
        id: "456",
        title: "Espresso",
        image: "https://picsum.photos/id/1060/200/200/",

    },

]

const CartScreen = () => {
    const { dispatch } = useNavigation();
    const [value, setValue] = useState({
        promo: ''
    })
    const goCheckout = () => {
        dispatch(StackActions.replace('Checkout'))
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-white flex`}>
            <StackScreen style={tw`flex-1 bg-white`}>
                <View>
                    <View><Text>Order Summary</Text></View>
                    <FlatList
                        data={data}

                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <LongProductCard
                                name={item.title}
                                imageUri={item.image}
                                cost={"20"}
                                key={item.id}
                            />
                        )}
                    />

                    <View style={tw`flex justify-between flex-row`}>
                        <InputField
                            inputProps={{
                                placeholder: 'promo',
                                onChangeText: (promo) => {
                                    setValue({ ...value, promo })
                                },

                                textStyle: { fontSize: 16 },
                                value: value.promo,
                                style: styles.input,
                            }}
                        />
                        <Button
                            style={{
                                width: '30%'
                            }}
                            title='Apply'
                            titleStyle={{
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                            onPress={goCheckout}
                        />
                    </View>
                    <View>
                        <Button
                            title='Checkout'
                            titleStyle={{
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                            onPress={goCheckout}
                        />
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default CartScreen
function setValue(arg0: any) {
    throw new Error('Function not implemented.')
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    }
})
