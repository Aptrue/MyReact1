
import  React , { useState }  from 'react';
import {  Alert, FlatList, View, ScrollView, TouchableOpacity } from 'react-native';

import {  FAB, List, Button,  Provider as PaperProvider, TextInput, } from 'react-native-paper';
import Tarefas from '../components/tarefa';
import { Estilo } from '../styles/globalStyleSheet';

const Todo = () => {


  const [page, setHome] = useState('Minhas Tarefas');
  const [tarefa, setTarefa] = useState({ text:'', key: 0  });
  const [defaultKey,  setKey]=useState(21);

  let key = defaultKey + 1;

  const [todos, setTodos] = useState([
    { text: 'Ler um livro qualquer', key: '1' },
    { text: 'Assistir um filme', key: '2' },
    { text: 'Codar um pouco', key: '3' }
  ]);
 
 const adicionarTarefas = ()=>{
    
    let existe = false; // caso a tarefa exista 
    setKey(key)   //actualizando o valor da chave

    todos.forEach( valor => {  // verificar se a tarefa existe
         if(tarefa.text==valor.text){
           existe = true;
         }
    });

    if(tarefa.text!='' && existe==false){ // comparar se o valor nao eh igaual a espaco em branco
      todos.push(tarefa);
          setTarefa({text:'', key: 0});  //insreriindo a tarefa
      } else{
             
        Alert.alert('Ophaa', 'Verifique se a tarefa esta bem escrita ou repetida');
        console.log('====================================');
        console.log('Verifique se a tarefa esta bem escrita ou repetida');
        console.log('====================================');
      }


  
    
    
 }

  return (
  

< PaperProvider>

       {/* <Cabeca pageName={page}/> */}
        
        <ScrollView>
                      <View style={Estilo.container}>                       
                            <TextInput  label="Tarefa" onChangeText={ (value)=> setTarefa({text: value, key: defaultKey})} placeholder='Digite a tarefa' style={Estilo.textinput}></TextInput>
                            <Button icon="briefcase-plus-outline" color='#E535F3' mode="contained" onPress={adicionarTarefas}>Adicionar</Button>
                      </View>

                      <View style={Estilo.container}>
                          <FlatList
                              data={todos}
                              renderItem={({ item }) => (
                              
                                <TouchableOpacity>
                                
                                    <Tarefas item={item} />

                                </TouchableOpacity>
                              )}
                            />
                           
                      </View>

        </ScrollView>
     
                            <FAB 
                              style={Estilo.fab}
                              small
                              icon="plus"
                              onPress={() => console.log('Fab')}
                            />
</PaperProvider>
  );
};

export default Todo;



