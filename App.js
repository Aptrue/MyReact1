import 'react-native-gesture-handler';
import  React ,{ useState, useEffect } from 'react';
import Tabs from './routes/tabs';
import MyDrawerMenu from './routes/DrawerMenu';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStackNavigation from './routes/loginStack';

export default function App() {

const[estado, setEstado]=useState(false);

 useEffect ( ()=>{

   VerificarToken();



});



async function VerificarToken(s) {

  await AsyncStorage.getItem('user').then((res) =>{

       console.log(res);

       if(res!=null){
         setEstado(true);
       }
  }
  );
}

            if(estado){
              return (
                <MyDrawerMenu/>
              );

            } else {

               return <LoginStackNavigation/>



            }








}



