
import  React , { useState }  from 'react';
import {  Text, View, ScrollView} from 'react-native';

import { Title, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
  import {

    DefaultTheme as NavigationDefaultTheme,

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
                     <Title>{text}</Title>
                     <Text>{key}</Text>
                </View>



            </ScrollView>



    </PaperProvider>

    );
}



