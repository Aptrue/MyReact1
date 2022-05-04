
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


    const { title, rating, body, key} = route.params;

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);



    //chart
    const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };

    //fim chart

    return  (
    <PaperProvider>


            <HeaderShared pageName="Detalhes" navigation={navigation} />

            <ScrollView>

                <View style={Estilo.content}>




                                <Card style={Estilo.Card}>
                                <Card.Title
                                    title={title}
                                    subtitle={rating}
                                    left={(props) => <Avatar.Icon {...props} icon="semantic-web" />}
                                    right={(props) => <IconButton {...props} icon="apps" onPress={() => {}} />}
                                  />


                                <Card.Content>

                                  <Paragraph>{body}</Paragraph>
                                </Card.Content>
                                </Card>



                                <Card style={Estilo.Card}>
                                <Card.Title
                                    title={title}
                                    subtitle={rating}
                                    left={(props) => <Avatar.Icon {...props} icon="semantic-web" />}
                                    right={(props) => <IconButton {...props} icon="apps" onPress={() => {}} />}
                                  />


                                <Card.Content>

                                  <Paragraph>{body}</Paragraph>
                                </Card.Content>
                                </Card>



                                <Card style={Estilo.Card}>
                                <Card.Title
                                    title={title}
                                    subtitle={rating}
                                    left={(props) => <Avatar.Icon {...props} icon="semantic-web" />}
                                    right={(props) => <IconButton {...props} icon="apps" onPress={() => {}} />}
                                  />


                                <Card.Content>

                                  <Paragraph>{body}</Paragraph>
                                </Card.Content>
                                </Card>



                                <Card style={Estilo.Card}>
                                <Card.Title
                                    title={title}
                                    subtitle={rating}
                                    left={(props) => <Avatar.Icon {...props} icon="semantic-web" />}
                                    right={(props) => <IconButton {...props} icon="apps" onPress={() => {}} />}
                                  />


                                <Card.Content>

                                  <Paragraph>{body}</Paragraph>
                                </Card.Content>
                                </Card>



                                <Card style={Estilo.Card}>
                                <Card.Title
                                    title={title}
                                    subtitle={rating}
                                    left={(props) => <Avatar.Icon {...props} icon="semantic-web" />}
                                    right={(props) => <IconButton {...props} icon="apps" onPress={() => {}} />}
                                  />


                                <Card.Content>

                                  <Paragraph>{body}</Paragraph>
                                </Card.Content>
                                </Card>

                 </View>



            </ScrollView>



    </PaperProvider>

    );
}



