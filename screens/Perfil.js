import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {IconButton, List, Avatar,Modal, Portal, Provider, Title, Button, TextInput} from 'react-native-paper'
import { Estilo } from '../styles/globalStyleSheet'
import AsyncStorageLib from '@react-native-async-storage/async-storage'




export  function Perfil({navigation}){

//Modal Variable Name

  const [modalVisibleName, setModalVisibleName] = useState(false);

  const showModalName = () => {
    setModalVisibleName(true);
  }
  const hideModalName = () => setModalVisibleName(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, marginHorizontal: 14};

  //fim modal Variable Name

  const [name, setName]=React.useState('Armando');





    return (
        <View style={Estilo.container}>

                <View style={Estilo.content}>


                      <View style={styles.foto}>
                             <Avatar.Image
                                                        source={require('../assets/perfil.jpg')}
                                                        size={100}

                            />
                      </View>
                      <View>
                           <TouchableOpacity onPress={showModalName}>
                                    <List.Item
                                    title={'Nome'}
                                    description={name}
                                    left={props => <List.Icon {...props} icon="account" />}
                                    right={props => <IconButton {...props} icon="create" />}
                                    />
                           </TouchableOpacity>

                           <TouchableOpacity>
                                    <List.Item
                                    title={'Estado'}
                                    description={'We create We design'}
                                    left={props => <List.Icon {...props} icon="support" />}
                                    />
                           </TouchableOpacity>

                      </View>



                </View>


                      <Provider>
                        <Portal>
                          <Modal visible={modalVisibleName} onDismiss={hideModalName} contentContainerStyle={containerStyle}>
                          <Title style={styles.modalText}>Actualizar Nome</Title>
                          <TextInput
                            placeholder='Novo Nome'
                            label='Tarefa'
                            mode='outlined'
                            onChangeText={value => { setName(value)}}
                            value={name}
                            />


                          <Button icon="briefcase-plus-outline" color='#E535F3' mode="contained" style={styles.btn}>Actualizar</Button>
                          </Modal>
                        </Portal>
                      </Provider>



        </View>
    )
}


const styles = StyleSheet.create({

       foto: {
             alignItems: 'center'
       },
       modal:{
           marginHorizontal: 5
       },
       btn:{
            marginTop: 15
       }

})