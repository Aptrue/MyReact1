
import  React , { useState }  from 'react';
import { SafeAreaView, Alert, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

import { Title, DefaultTheme,
  Paragraph,  Card, Provider as PaperProvider, DataTable, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
  import { 
    NavigationContainer, 
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
  } from '@react-navigation/native';

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
  
 
    return <PaperProvider theme={CustomDefaultTheme}>

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


              <View>
              <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
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

