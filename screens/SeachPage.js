
import  React , { useState }  from 'react';
import {  Text, View, ScrollView, StyleSheet} from 'react-native';

import { Title, Searchbar, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, Appbar} from 'react-native-paper';


  import { Estilo } from '../styles/globalStyleSheet';





export default function SeachPage({ route, navigation }){

    const [searchQuery, setSearchQuery] = React.useState('hhh');

    const onChangeSearch = query => setSearchQuery(query);

    return  (
    <PaperProvider>

        <Appbar.Header style={Estilo.header}>
          {/* <Appbar.Content titleStyle={Estilo.headerTitle} /> */}
          <Searchbar
            style={Styles.search}
            placeholder="Buscar"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Appbar.Header>



    </PaperProvider>

    );
}

const Styles = StyleSheet.create({

       search: {
           backgroundColor: "#ED56F7",
           borderColor: '#fff',
           color: '#fff'
       }


});

