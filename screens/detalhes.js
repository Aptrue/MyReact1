
import  React , { useState }  from 'react';
import { SafeAreaView, Alert, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

import { DefaultTheme,Title, Avatar,
  Paragraph, FAB, List, Button, Card, Provider as PaperProvider, Appbar, TextInput, Colors} from 'react-native-paper';



export default function Detalhes({ route, navigation }){


    const { title, rating, body, key} = route.params;

  
 
    return <PaperProvider>

              {/* <Cebeca pageName={home}></Cebeca> */}

              <ScrollView>
                <View style={styles.container}>
                
                <Card style={styles.Card}>
                    <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{body}</Paragraph>
                    </Card.Content>
                </Card>
       
           
              
              </View>
              </ScrollView>
        
              
           </PaperProvider>
}


const styles = StyleSheet.create({
  container: {
       backgroundColor: '#FCFCFB',
       paddingTop: 10,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    borderBottomColor: '#E535F3',
    paddingBottom: 4,
  },

  Card:{
       
    marginBottom: 20,
  }
  

});

