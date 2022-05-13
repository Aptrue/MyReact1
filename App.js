import 'react-native-gesture-handler';
import  React ,{ useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStackNavigation from './routes/loginStack';
import NestedRoute from './routes/NestedRoute';

export default function App() {

const[estado, setEstado]=useState(false);
const[protype, setProperty]=useState({
 name: "" , idade: "", genero: ""
});

 useEffect ( ()=>{

   VerificarToken();
   console.log(protype.idade);


});



async function VerificarToken(s) {

  await AsyncStorage.getItem('user').then((res) =>{



       if(res!=null){
         setEstado(true);
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



