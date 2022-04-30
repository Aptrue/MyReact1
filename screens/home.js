
import  React , { useState }  from 'react';
import { SafeAreaView, Alert, RefreshControl, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

import { DefaultTheme,Title, Avatar, 
  Paragraph, FAB, List, Button, Card, Provider as PaperProvider, Appbar, TextInput, Colors} from 'react-native-paper';

import { Estilo } from '../styles/globalStyleSheet';



export default function Home({navigation}){

   const home = 'Home';

   const [reviews, setReviews] = useState([
    { title: 'React Native', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'AngularDev + Ionic Ui', rating: 4, body: 'onic é um SDK de código aberto completo para desenvolvimento de aplicativo móvel híbrido criado por Max Lynch, Ben Sperry e Adam Bradley da Drifty Co. em 2013.', key: '2' },
    { title: 'Cordova / Capacitor ', rating: 3, body: 'lorem ipsum', key: '3' },
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

    return <PaperProvider >

            <SafeAreaView style={Estilo.container}>

                    <ScrollView  
                    
                    contentContainerStyle={Estilo.scrollView}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    
                    >
                            <View style={Estilo.content}>
                            
                                
                                    <FlatList data={reviews} renderItem={({ item }) => (

                        

                                    

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
}