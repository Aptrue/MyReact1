
import  React , { useState }  from 'react';
import { SafeAreaView, Alert, FlatList, StyleSheet, Text, View, ScrollView,Dimensions, TouchableOpacity, ScrollViewComponent } from 'react-native';

import { Title, DefaultTheme,
  Paragraph,  Card, Provider as PaperProvider,IconButton, DataTable,Avatar, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
  import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
  } from '@react-navigation/native';

  import { Estilo } from '../styles/globalStyleSheet';

  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import HeaderShared from '../shared/header';

const optionsPerPage = [2, 3, 4];

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#6B1A70 ',
    text: '#333333'
  }
}

export default function Detalhes({ route, navigation }){

const { text, key}=route.params;

    return  (
    <PaperProvider>


            {/* <HeaderShared pageName="Detalhes" navigation={navigation} /> */}

            <ScrollView>

                <View style={Estilo.content}>
                     <Text>{text} {key}</Text>
                </View>



            </ScrollView>



    </PaperProvider>

    );
}



