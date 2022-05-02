
import  React , { useState,  useCallback, useMemo, useRef  }  from 'react';
import { SafeAreaView, RefreshControl, FlatList,
  StyleSheet,Alert, Text, View, ScrollView,TextInput, Button } from 'react-native';

import { Provider as PaperProvider
   } from 'react-native-paper';

import { Formik } from 'formik';
import DrawerMenu from '../routes/DrawerMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function login({navigation}){


const [user, setUser] = useState({email:null, password:null});





    return <PaperProvider >

            <SafeAreaView style={styles.container}>

                    <ScrollView

                    contentContainerStyle={styles.scrollView}


                    >
                            <View style={styles.content}>



                                      <Formik

                                          initialValues={{ email: '', password: '' }}
                                          onSubmit={(values) => loginAuth(values, navigation)}
                                          >
                                          {props => (
                                            <View>
                                              <TextInput style={styles.textInput}

                                                placeholder='Email'
                                                onChangeText={props.handleChange('email')}
                                                value={props.values.email}
                                              />

                                              <TextInput style={styles.textInput}

                                                // multiline
                                                placeholder='Password'
                                                onChangeText={props.handleChange('password')}
                                                value={props.values.password}
                                              />


                                              <Button color='maroon' title="Entrar" onPress={props.handleSubmit} />

                                            </View>
                                          )}
                                          </Formik>



                            </View>
                    </ScrollView>




            </SafeAreaView>

           </PaperProvider>
}

export const loginAuth = async (data, pros) =>{


  let url = "https://fse.sumburero.org/api/login";

  await fetch(url, {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       }).then((response) => response.json())
       .then(

          (res) =>{

                if(res.message=="Unauthorized"){
                  Alert.alert('Erro', JSON.stringify(res));
                } else if (res.user!=null){

                   saveUsar(res);
                }
          },


       ).done();





    async function saveUsar(data){

      try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('user', jsonValue).then(()=>{

           return  pros.navigate('Home');
        })
      } catch (e) {
        // saving error
      }

    }

 }


const styles = StyleSheet.create({


  content: {
    marginTop: 340,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,

  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FF5FCA',
  },
  textInput: {

    padding: 10
  },

});
