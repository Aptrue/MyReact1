
import  React , { useState }  from 'react';
import { SafeAreaView, Alert, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

import { DefaultTheme,Title, Avatar,
  Paragraph, FAB, List, Button, Card, Provider as PaperProvider, Appbar, TextInput, Colors} from 'react-native-paper';

import { Estilo } from '../styles/globalStyleSheet';



export default function Home({navigation}){

   const home = 'Home';

   const [reviews, setReviews] = useState([
    { title: 'React Native', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'AngularDev + Ionic Ui', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Cordova / Capacitor ', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return <PaperProvider >

              {/* <Cebeca pageName={home}></Cebeca> */}

              <ScrollView >
                <View style={Estilo.container}>
                
                     
                <FlatList data={reviews} renderItem={({ item }) => (

     

                

                    <Card style={Estilo.Card} onPress={() => navigation.navigate('Detalhes', item)}>
                          <Card.Content>
                            <Title><Text style={Estilo.titleText}>{ item.title }</Text>{':  '}<Text>{item.rating}</Text></Title>    
                          </Card.Content>
                          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    </Card>

                

                )} />
           
              
              </View>
              </ScrollView>
        
              
           </PaperProvider>
}