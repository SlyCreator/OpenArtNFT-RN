import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/core'
import StackScreen from '../components/StackScreen'
import tw from 'tailwind-react-native-classnames'
import InputField from '../components/InputField'
import { Feather } from '@expo/vector-icons'
import Button from '../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import DarkLogoSvg from '../components/svgs/DarkLogo'
import LightLogoSvg from '../components/svgs/LightLogoSvg'


const SignUpScreen = () => {
    const {dispatch} = useNavigation();
    const [secure, setSecure] = useState(true)
    const [value,setValue] = useState({
        email: '',
        password:'',
        fullname:'',
        phone:''
    })


    const onHome = ()=>{
        // if (!EmailRegex.test(value?.email)) {
        //     showErrorAlert({
        //       toast: {
        //         message: t('Please enter a valid email.'),
        //         type: 'warning',
        //       },
        //     })
        //     return
        //   }
      
          //dispatchStore(setLoading(true))
          //TODO: Add Api
          dispatch(StackActions.push('Root'))
       // }
    }

    return (
        <View style={tw`bg-white flex-1`}>
            <KeyboardAwareScrollView contentContainerStyle={tw`bg-white flex-1`}>
            <StackScreen> 
                <View>
                   <View style={tw` justify-center items-center mt-20`}>
                       <LightLogoSvg/>
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
                            {/* <Text style={tw`ml-5`}>Email</Text> */}
                            <InputField 
                                inputProps={{
                                    placeholder: 'FullName',
                                    onChangeText: (fullname) => {
                                      setValue({ ...value,fullname })
                                    },
            
                                    textStyle: { fontSize: 16 },
                                    value: value.fullname,
                                    style: styles.input,
                                }}
                            />
                        </View>
                        <View>
                            {/* <Text style={tw`ml-5`}>Email</Text> */}
                            <InputField 
                                inputProps={{
                                    placeholder: 'Phone',
                                    onChangeText: (phone) => {
                                      setValue({ ...value, phone })
                                    },
                                    keyboardType: 'phone-pad',
                                    textStyle: { fontSize: 16 },
                                    value: value.phone,
                                    style: styles.input,
                                }}
                            />
                        </View>
                        <View>
                            <Button 
                                title='Sign-Up'
                                titleStyle={{
                                    color:'#FFF',
                                    textTransform:'none',
                                    fontSize:14
                                }}
                                onPress={onHome}
                            />
                        </View>
                   </View>
                </View>
            </StackScreen>
       
            </KeyboardAwareScrollView>
         </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      }
})
