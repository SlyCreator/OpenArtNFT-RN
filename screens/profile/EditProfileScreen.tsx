import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import InputField from '../../components/InputField'
import ProfileHeader from '../../components/ProfileHeader'

const EditProfileScreen = () => {
    return (
        <ScrollView style={tw`flex-1 bg-white`} showsVerticalScrollIndicator={false}>
            <ProfileHeader />
            <View style={tw`px-4`}>
               <View>
               <Text style={tw`font-semibold text-xl text-gray-500`}>Enter your details</Text>
                <InputField
                    inputProps={{
                        placeholder: 'Name',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                <InputField
                    inputProps={{
                        placeholder: 'User Name',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
               </View>

               <View>
               <Text style={tw`font-semibold text-xl text-gray-500`}>Enter your email</Text>
                <InputField
                    inputProps={{
                        placeholder: 'Email',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                    <Text>
                    Add your email address to receive notifications about your activity on Foundation. This will not be shown on your profile.
                    </Text>
               </View>

               <View>
               <Text style={tw`font-semibold text-xl text-gray-500`}>
                   Enter your bio
                   </Text>
                <InputField
                    inputProps={{
                        placeholder: 'Email',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                    
               </View>
               <View>
               <Text style={tw`font-semibold text-xl text-gray-500`}>
                   Upload a profile image
                   </Text>
                <InputField
                    inputProps={{
                        placeholder: 'Email',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                    
               </View>

               <View>
                   <Text>Verify your profile</Text>
                   <Text>
                       show the foundation community that your profile is authentic
                   </Text>
                   <Button title='Verify via Twitter' outline />
                   <Button title='Verify via Instagram' outline />
               </View>

               <View>
               <Text style={tw`font-semibold text-xl text-gray-500`}>
                   Add links to your social media profile.
                   </Text>
                <InputField
                    inputProps={{
                        placeholder: 'website',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                <InputField
                    inputProps={{
                        placeholder: 'Discord',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                <InputField
                    inputProps={{
                        placeholder: 'instagram',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                <InputField
                    inputProps={{
                        placeholder: 'youtube channel',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                <InputField
                    inputProps={{
                        placeholder: 'facebook',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                    <InputField
                    inputProps={{
                        placeholder: 'Tiktok',
                        onChangeText: (email) => {
                            //   setValue({ ...value, email })
                        },
                        keyboardType: 'email-address',
                        textStyle: { fontSize: 16 },
                        // value: value.email,
                        // style: styles.input,
                    }}
                />
                 <Button title='Save'  />
               </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

export default EditProfileScreen
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    }
})