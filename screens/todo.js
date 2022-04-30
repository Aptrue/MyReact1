
import  React , { useState }  from 'react';
import {  Alert, FlatList, View, ScrollView, TouchableOpacity } from 'react-native';

import { FAB, Portal, Provider, List, Button,  Provider as PaperProvider, TextInput, } from 'react-native-paper';
import Tarefas from '../components/tarefa';
import { Estilo } from '../styles/globalStyleSheet';

const Todo = () => {

  // Fab variable

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  //fim do fab variable

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
                      <View style={Estilo.content}>                       
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
     
        <Provider>  
           {/* fab */}
                <Portal color="#E535F3">
                  <FAB.Group 
                    open={open}
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                      { icon: 'plus', onPress: () => console.log('Pressed add') },
                      {
                        icon: 'star',
                        label: 'Star',
                        onPress: () => console.log('Pressed star'),
                      },
                      {
                        icon: 'email',
                        label: 'Email',
                        color: 'red',
                        onPress: () => console.log('Pressed email'),
                      },
                      {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => console.log('Pressed notifications'),
                        small: false,
                      },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                      if (open) {
                        // do something if the speed dial is open
                      }
                    }}
                  />
                </Portal>
    </Provider>
</PaperProvider>
  );
};

export default Todo;



