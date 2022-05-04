
import  React , { useState,  useCallback, useMemo, useRef }  from 'react';
import { SafeAreaView, RefreshControl, FlatList,
  StyleSheet, Text, View, ScrollView, Button  } from 'react-native';

import { Title, Card, Provider as PaperProvider,
   } from 'react-native-paper';

import { Estilo } from '../styles/globalStyleSheet';
import HeaderShared from '../shared/header';






export default function Home({navigation}){

   const home = 'Home';


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


                            </View>

                    </ScrollView>


            </SafeAreaView>

           </PaperProvider>

           );
}


