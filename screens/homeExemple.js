
import  React , { useState,  useCallback,useEffect, useMemo, useRef }  from 'react';
import { SafeAreaView, RefreshControl, FlatList,
  StyleSheet, Text, View, ScrollView, Button  } from 'react-native';

import { Title, Card, Provider as PaperProvider,
   } from 'react-native-paper';

import { Estilo } from '../styles/globalStyleSheet';
import HeaderShared from '../shared/header';

import AsyncStorage from '@react-native-async-storage/async-storage';






export default function Home({navigation}){





  useEffect(() => {

       VerificarNome();


  });


  async function VerificarNome() {

    await AsyncStorage.getItem('user').then((res) =>{

        console.log('====================================');
        console.log(res['user']);
        console.log('====================================');
    }
    );
  }

   const home = 'Home';

   const [reviews, setReviews] = useState([
    { title: 'React Native', rating: 5, body: 'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa', key: '1' },
    { title: 'AngularDev + Ionic Ui', rating: 4, body: 'Ionic é um SDK de código aberto completo para desenvolvimento de aplicativo móvel híbrido criado por Max Lynch, Ben Sperry e Adam Bradley da Drifty Co. em 2013.', key: '2' },
    { title: 'Cordova / Capacitor ', rating: 3, body: 'Apache Cordova é uma estrutura de desenvolvimento de aplicativo móvel criada pela Nitobi. A Adobe Systems comprou a Nitobi em 2011, rebatizou-a como PhoneGap e, mais tarde, lançou uma versão de código aberto do software chamada Apache Cordova', key: '3' },
    ]);

    const wait = (timeout) => {

      // tempo para refrescar a page

      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);  //Variavel pra mediar o fresh

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);



    //Fim do refresher


    return ( <PaperProvider >

            <SafeAreaView style={Estilo.container}>

            <HeaderShared  pageName="Home" navigation={navigation}/>

                    <ScrollView
                    nestedScrollEnabled={true}
                    // contentContainerStyle={Estilo.scrollView}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }

                    >
                            <View style={Estilo.content}>


                                    <FlatList  data={reviews} renderItem={({ item }) => (





                                        <Card style={Estilo.Card} onPress={() => navigation.navigate('Detalhes', item)}>
                                              <Card.Content>
                                                <Title><Text style={Estilo.titleText}>{ item.title }</Text>{':  '}<Text>{item.rating}</Text></Title>
                                              </Card.Content>
                                              {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                                        </Card>



                                    )} />


                            </View>

                    </ScrollView>


            </SafeAreaView>

           </PaperProvider>

           );
}


