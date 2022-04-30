import 'react-native-gesture-handler';
import  React ,{ useState, useEffect } from 'react';
import Tabs from './routes/tabs';
import MyDrawerMenu from './routes/DrawerMenu';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

const[estado, setEstado]=useState(false);

useEffect ( ()=>{
   
   let nota = VerificarToken ();
   
});

            if(estado){
              return (     
                <MyDrawerMenu/>
              );

            } else {
              
               return <Tabs/>

                

            }


}


const  VerificarToken = async () =>{

    await AsyncStorage.getItem('token').then((res) =>{
         setEstado(true);
    },
    (error) => {
         
          this.estado.valor = this.estado.valor;
    }
    
    );
}


