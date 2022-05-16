import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import OpenArtSvg from './svgs/OpenArtSvg'
import Button from './Button'
const Footer = () => {
    return (
             
        <View>
        <View style={tw`justify-center items-center`}>
        <OpenArtSvg />
            <Text>TheNewCreative Economy</Text>
            <Button
             title='Earn now'
             titleStyle={{
                 color: '#FFF',
                 textTransform: 'none',
                 fontSize: 14
             }}
         />
          <Button
             title='Place a bid'
             titleStyle={{
                 color: '#000',
                 textTransform: 'none',
                 fontSize: 14
             }}
             outline
         />
        </View>
        <View style={tw`bg-black flex-row justify-between`}>
             <View>
                 <Text style={tw`text-white`}>Instagram</Text>
                 <Text style={tw`text-white`}>Twitter</Text>
                 <Text style={tw`text-white`}>Discord</Text>
                 <Text style={tw`text-white`}>Blog</Text>
             </View>
             <View>
                 <Text style={tw`text-white`}>About</Text>
                 <Text style={tw`text-white`}>Community Guildlines</Text>
                 <Text style={tw`text-white`}>Terms of Service</Text>
                 <Text style={tw`text-white`}>Privacy</Text>
                 <Text style={tw`text-white`}>Careers</Text>
                 <Text style={tw`text-white`}>Help</Text>
             </View>
             <View>
                 <Text>2021 Openart</Text>
             </View>
        </View>
     </View>

    )
}

export default Footer
