import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/core'
import StackScreen from '../components/StackScreen'
import tw from 'tailwind-react-native-classnames'
import InputField from '../components/InputField'
import { Feather } from '@expo/vector-icons'
import Button from '../components/Button'
import LightLogoSvg from '../components/svgs/LightLogoSvg'


const SignInScreen = () => {
    const {dispatch} = useNavigation();
    const [secure, setSecure] = useState(true)
    const [value,setValue] = useState({
        email: '',
        password:''
    })

    return (
        <View style={tw`bg-white flex-1`}>
            <StackScreen> 
                <View>
                   <View style={tw` justify-center items-center mt-20`}>
                       <LightLogoSvg />
                   </View>
                   <View>
                        <View style={tw`mt-5`}>
                            {/* <Text style={tw`ml-5`}>Email</Text> */}
                            <InputField 
                                inputProps={{
                                    placeholder: 'Email ID',

                                    onChangeText: (email) => {
                                      setValue({ ...value, email })
                                    },
                                    keyboardType: 'email-address',
                                    textStyle: { fontSize: 16 },
                                    value: value.email,
                                    style: styles.input,
                                }}
                            />
                        </View>

                        <View>
                            {/* <Text style={tw`ml-5`}>Password</Text> */}
                            <InputField 
                                inputProps={{
                                    placeholder: '******',
                                    accessoryRight: (color) => (
                                        <Feather
                                          onPress={() => setSecure(!secure)}
                                          name={secure ? 'eye-off' : 'eye'}
                                          color={color}
                                          size={20}
                                        />
                                      ),
                                      value: value.password,
                                      onChangeText: (password) => {
                                        setValue({ ...value, password })
                                      },
                                      textStyle: { fontSize: 16 },
                                      value: value.password,
                                      style: styles.input,
                                }}
                            />
                        </View>
                        <View>
                            <Button 
                                title='Login'
                                titleStyle={{
                                    color:'#FFF',
                                    textTransform:'none',
                                    fontSize:14
                                }}
                            />
                        </View>
                   </View>
                </View>
            </StackScreen>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      }
})
