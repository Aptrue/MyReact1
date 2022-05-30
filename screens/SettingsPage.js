import React from 'react'
import { View, Text} from 'react-native'
import { Estilo } from '../styles/globalStyleSheet'



export  function SettingsPage(){


    return (
        <View style={Estilo.container}>

                <View style={Estilo.content}>
                    <Text>Settings Pages Only For Authenticated Users</Text>
                </View>



        </View>
    )
}