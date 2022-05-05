import 'react-native-gesture-handler';
import  React ,{ useState, useEffect } from 'react';
import Tabs from './routes/tabs';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStackNavigation from './routes/loginStack';
import NestedRoute from './routes/NestedRoute';

export default function App() {

const[estado, setEstado]=useState(true);

 useEffect ( ()=>{

   VerificarToken();



});



async function VerificarToken(s) {

  await AsyncStorage.getItem('user').then((res) =>{



       if(res!=null){
         setEstado(false);
       }
  }
  );
}

            if(estado){
              return (
                <NestedRoute/>
              );

            } else {

               return <LoginStackNavigation/>



            }








}



