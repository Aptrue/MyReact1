
import  React , { useState, useRef }  from 'react';
import {  Alert, Modal, FlatList, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { FAB, Portal,  Provider, List, Button,  Provider as PaperProvider, TextInput, Title, } from 'react-native-paper';
import Tarefas from '../components/tarefa';
import { Estilo } from '../styles/globalStyleSheet';
import HeaderShared from '../shared/header'



const Home = ({navigation}) => {

  // Fab variable

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  //fim do fab variable


  //Modal Variable

  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  }

  //fim modal Variable




  const [page, setHome] = useState('Minhas Tarefas');
  const [tarefa, setTarefa] = useState({ text:'', key: 0  });
  const [defaultKey,  setKey]=useState(21);

  let key = defaultKey + 1;

  const [todos, setTodos] = useState([
    { text: 'Lerrrr um livro qualquer', key: '1' },
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
          setModalVisible(false);
      } else{
        Alert.alert('Atenção', 'Campo em Branco ou tarefa Repetida');

      }


 }




  return (


<PaperProvider>

        <HeaderShared pageName="Todo Area" navigation={navigation} />

        <ScrollView>



                    <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModalVisible(!modalVisible);
                            }}
                          >

                        <View style={styles.modalView}>
                        <Title style={styles.modalText}>Criar nova tarefa</Title>
                        <TextInput  label="Tarefa" onChangeText={ (value)=> setTarefa({text: value, key: defaultKey})} placeholder='Digite a tarefa' style={Estilo.textinput}></TextInput>
                        <Button icon="briefcase-plus-outline" color='#E535F3' mode="contained" onPress={adicionarTarefas}>Adicionar</Button>
                        </View>

                   </Modal>

                      <View style={Estilo.container}>
                          <FlatList
                              data={todos}
                              renderItem={({ item }) => (

                                <TouchableOpacity>

                                    <Tarefas item={item}/>

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
                      { icon: 'plus', onPress: () => {showModal()} },
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

export default Home;

const styles = StyleSheet.create({

  modalView: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



