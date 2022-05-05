
import  React , { useState,  useCallback, useMemo, useRef  }  from 'react';
import { SafeAreaView, RefreshControl, FlatList,
  StyleSheet,Alert, Image, Text, View, ScrollView,TextInput } from 'react-native';

import { Provider as PaperProvider, Button
   } from 'react-native-paper';

import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function login({navigation}){


const [user, setUser] = useState({email:null, password:null});





    return <PaperProvider >

            <SafeAreaView style={styles.container}>

                    <ScrollView

                    contentContainerStyle={styles.scrollView}


                    >
                            <View style={styles.content}>

                                     <View style={styles.imageV}>
                                          <Image style={styles.stretch} source={require('../assets/react.png')}/>
                                     </View>

                                      <Formik

                                          initialValues={{ email: '', password: '' }}
                                          onSubmit={(values) => {

                                            // loginAuth(values, navigation);

                                            Alert.alert('Hahaha', 'Quer Logar ne kkkk');


                                          } }

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

                                              <Button icon="login" mode="outlined" color='#fff' onPress={props.handleSubmit} touchSoundDisabled='true'>
                                                Entrar
                                              </Button>

                                            </View>
                                          )}
                                          </Formik>





                            </View>


                    </ScrollView>


                    <View style={styles.footer}>

                    <Text style={styles.footerText}>From{'\n'}<Text>Armando Paulo</Text></Text>

                    </View>





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
    marginTop: 250,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    // backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,

  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FF5FCA',
  },
  textInput: {
    padding: 10,
    borderRadius: 20,
    borderColor: 'silver',
    backgroundColor: '#ffff',
    marginBottom: 20,

  },
  stretch: {
    width: 66,
    height: 58,
    marginBottom: 5,
  },

  imageV: {
    alignItems: 'center',
    paddingBottom: 16
  },
  footer:{
    flexDirection: 'row',
    height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  }
  ,
  footerText:{
    color: '#fff',
  }


});
