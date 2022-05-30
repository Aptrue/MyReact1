import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {IconButton, List, Avatar, Divider} from 'react-native-paper'
import { Estilo } from '../styles/globalStyleSheet'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler'



export  function SettingsPage({navigation}){

    const [name, setName]=React.useState('');

    useEffect(()=>{
           getUser();
    })

async function getUser(){

    await AsyncStorage.getItem('user').then((res)=>{
          setName(res);
    })

}



    return (
        <View style={Estilo.container}>

                <View style={Estilo.content}>

                    <List.Item

                                title={'Armando Paulo'}
                                description={'Web and App Developer '+'ID: TAS2022'}
                                left={props => <TouchableOpacity onPress={ ()=>{ navigation.navigate('Perfil')}}>
                                        <Avatar.Image {...props}
                                                        source={require('../assets/perfil.jpg')}
                                                        size={50}
                                                    />
                                </TouchableOpacity>}
                                right={props => <IconButton {...props} color="#ED56F7" icon="??" onPress={ ()=>{ navigation.navigate('Perfil')}}/>}

                    />

                   <Divider/>

                   <ScrollView>

                            <View style={styles.settings}>



                           <TouchableOpacity>
                                    <List.Item
                                    title={'Minha Conta'}
                                    description={'Privacidade, Segurança, Alterar conta'}
                                    left={props => <List.Icon {...props} icon="account" />}
                                    />
                           </TouchableOpacity>

                           <TouchableOpacity>
                                    <List.Item
                                    title={'Armazenamnto'}
                                    description={'Cache, Dados Pessoais,...'}
                                    left={props => <List.Icon {...props} icon="storage" />}
                                    />
                           </TouchableOpacity>

                           <TouchableOpacity>
                                    <List.Item
                                    title={'Notificações'}
                                    description={'Mensagens, Grupos, compartilhamento'}
                                    left={props => <List.Icon {...props} icon="notify" />}
                                    />
                           </TouchableOpacity>

                           <TouchableOpacity>
                                    <List.Item
                                    title={'FAQ'}
                                    description={'Seu cometário, Sugestão'}
                                    left={props => <List.Icon {...props} icon="faq" />}
                                    />
                           </TouchableOpacity>
                           <TouchableOpacity>
                                    <List.Item
                                    title={'Ajuda'}
                                    description={'Privacidade, Segurança, Alterar conta'}
                                    left={props => <List.Icon {...props} icon="support" />}
                                    />
                           </TouchableOpacity>


                            </View>

                   </ScrollView>







                </View>



        </View>
    )
}


const styles = StyleSheet.create({

       settings: {
             paddingTop: 5
       }

})