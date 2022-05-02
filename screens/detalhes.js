
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

    return <PaperProvider >

    <SafeAreaView style={Estilo.container}>

            <ScrollView contentContainerStyle={Estilo.scrollView} >

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


                          <DataTable>
                            <DataTable.Header>
                              <DataTable.Title>Criadores</DataTable.Title>
                              <DataTable.Title numeric>Ranking</DataTable.Title>
                              <DataTable.Title numeric>Usuários</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                            <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                            <DataTable.Cell numeric>159</DataTable.Cell>
                            <DataTable.Cell numeric>6.0</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                            <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                            <DataTable.Cell numeric>237</DataTable.Cell>
                            <DataTable.Cell numeric>8.0</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Pagination
                            page={page}
                            numberOfPages={3}
                            onPageChange={(page) => setPage(page)}
                            label="1-2 of 6"
                            optionsPerPage={optionsPerPage}
                            itemsPerPage={itemsPerPage}
                            setItemsPerPage={setItemsPerPage}
                            showFastPagination
                            optionsLabel={'Rows per page'}
                            />
                            </DataTable>



                            <View>
                                          <Text>Chart em BAR</Text>
                                          <BarChart

                                            data={{
                                              labels: ["January", "February", "March", "April", "May", "June"],
                                              datasets: [
                                                {
                                                  data: [
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100
                                                  ]
                                                }
                                              ]
                                            }}
                                            width={Dimensions.get("window").width} // from react-native
                                            height={220}
                                            yAxisLabel="$"
                                            yAxisSuffix="k"
                                            yAxisInterval={1} // optional, defaults to 1
                                            chartConfig={{
                                              backgroundColor: "#e26a00",
                                              backgroundGradientFrom: "#fb8c00",
                                              backgroundGradientTo: "#ffa726",
                                              decimalPlaces: 2, // optional, defaults to 2dp
                                              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                              style: {
                                                borderRadius: 16
                                              },
                                              propsForDots: {
                                                r: "6",
                                                strokeWidth: "2",
                                                stroke: "#ffa726"
                                              }
                                            }}
                                            bezier
                                            style={{
                                              marginRight: 60,
                                              borderRadius: 16,
                                            }}
                                          />
                            </View>

                    </View>





            </ScrollView>



    </SafeAreaView>

   </PaperProvider>
}



