
import  React , { useState }  from 'react';
import {  Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';

import { Title, Searchbar, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, Appbar} from 'react-native-paper';


  import { Estilo } from '../styles/globalStyleSheet';





export default function SeachPage({ route, navigation }){

    const [searchQuery, setSearchQuery] = React.useState('');
    const [arrayDemo, setArrayDemo] = React.useState([{name: 'Armando'}]);
    const [ver, setVer] =React.useState(false)


    const onChangeSearch = query =>{

        setVer(true)
        console.log(ver);
        setSearchQuery(query);

    }

    const onBlurr = () => {
      setVer(false)
    }

    return  (
    <PaperProvider>



             <Searchbar
            style={Styles.search}
            placeholder="Buscar"
            onChangeText={onChangeSearch}
            onBlur={onBlurr}
            value={searchQuery}
            />

            <View style={Estilo.content}>
              <Text>{searchQuery}</Text>

              {
                 ver?  <Text>Verdade</Text>  : <Text></Text>
              }

            </View>



    </PaperProvider>

    );
}

const Styles = StyleSheet.create({

       search: {

             marginVertical: 7,
             marginHorizontal: 14
       }


});

