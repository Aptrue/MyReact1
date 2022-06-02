import React, { useState } from 'react'
import {View, Text,  SafeAreaView, Share} from 'react-native'
import {Button, Provider as PaperProvider, Snackbar} from 'react-native-paper'
import {Estilo} from '../../styles/globalStyleSheet'
import Head from '../../shared/header'




export default function Home2 ({navigation}) {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const [loading,setLoading]=useState(false)

   const ver = async ()=>{
        setLoading(!loading);
        try {
            const result = await Share.share({
              message:
                'Partilhado Por Native Share React Native',

            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }

   }

    return (

        <PaperProvider>
                <Head pageName='Home 2' navigation={navigation}/>

                <SafeAreaView style={Estilo.container}>



                 <View style={Estilo.content}>
                    <Text>Home 2</Text>
                    <Button onPress={ver} onLongPress={()=>{console.log('Long press')}} mode='contained'
                    loading={loading} uppercase={loading} style={{ backgroundColor: "#ED56F7" }}>
                       {loading? <Text>Loading</Text> : <Text>Partilhar</Text>}
                    </Button>
                 </View>

                 <Button onPress={onToggleSnackBar}>{visible ? 'Esconder' : 'Mostrar'}</Button>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    style={{ backgroundColor: 'black' }}
                    action={{
                    label: 'Anular',
                    onPress: () => {

                        return <Snackbar visible={visible}>Anulado</Snackbar>
                    },
                    }}>
                   Toast/Snackbar Activado
                </Snackbar>

                </SafeAreaView>


        </PaperProvider>


    );
}

