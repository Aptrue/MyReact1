
import  React , { useState, useRef, useCallback }  from 'react';
import {  Alert, FlatList, View, ScrollView, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';

import { FAB, Portal,  Provider, List, Button,  Provider as PaperProvider, Modal, Text, Title, TextInput } from 'react-native-paper';
import Tarefas from '../components/tarefa';
import { Formik } from 'formik';
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
  const hideModal = () => setModalVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, marginHorizontal: 15};
  //fim modal Variable




  const [page, setHome] = useState('Minhas Tarefas');
  const [tarefa, setTarefa] = useState({ text:'', key: 0  });
  let key = Math.random();

  const [todos, setTodos] = useState([
    { text: 'Lerrrr um livro qualquer', key: '1', des: '' },
    { text: 'Assistir um filme', key: '2', des: '' },
    { text: 'Codar um pouco', key: '3', des: '' }
  ]);


 const adicionarTarefas = (values)=>{

    let existe = false; // caso a tarefa exista

    todos.forEach( valor => {  // verificar se a tarefa existe
         if(values.text==valor.text){
           existe = true;
         }
    });

    if(values.text!='' && existe==false){ // comparar se o valor nao eh igaual a espaco em branco
      todos.push(values);
          setModalVisible(false);
      } else{
        Alert.alert('Atenção', 'Campo em Branco ou tarefa Repetida');

      }


 }


 //Remover Tarefa

 const removerTarefa = (key) =>{
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.key != key);
  });
 }




  return (


<PaperProvider>

        <HeaderShared pageName="My Fucking Task" navigation={navigation} />

        <ScrollView>


                      <View style={Estilo.container}>
                          <FlatList
                              data={todos}
                              renderItem={({ item }) => (

                                <TouchableOpacity>

                                    <Tarefas item={item} remover={removerTarefa} navigation={navigation} />

                                </TouchableOpacity>
                              )}
                            />

                      </View>

        </ScrollView>

         <Provider>

                {/* fab */}

                <Portal>

                      <FAB
                        style={styles.fab}
                        small
                        icon="plus"
                        onPress={showModal}
                      />

                </Portal>




         </Provider>
                      <Provider>
                        <Portal>
                          <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                          <Title style={styles.modalText}>Criar nova tarefa</Title>
                          <Formik

                                      initialValues={tarefa}
                                      onSubmit={(values) => {

                                          adicionarTarefas(values);
                                          console.log(values)

                                      } }

                                      >
                                      {props => (
                                        <View>
                                          <TextInput style={styles.textInput}

                                            placeholder='Tarefa'
                                            label='Tarefa'
                                            mode='outlined'
                                            onChangeText={props.handleChange('text')}
                                            value={props.values.text}
                                          />

                                          <TextInput style={styles.textInput}

                                            // multiline
                                            autoCorrect={false}
                                            label='Descrição'
                                            mode='outlined'
                                            placeholder='descrição'
                                            onChangeText={props.handleChange('des')}
                                            value={props.values.des}
                                          />

                                              <TextInput style={styles.Inputdesabled}
                                              disabled
                                              label='key'
                                              mode='outlined'
                                              placeholder='key'
                                              onChangeText={props.handleChange('key')}
                                              value={props.values.key=key}
                                              />

                                           <Button icon="briefcase-plus-outline" color='#E535F3' mode="contained" onPress={props.handleSubmit}>Adicionar</Button>

                                        </View>
                                      )}
                           </Formik>
                          </Modal>
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
  },
  fab: {
    position: 'absolute',
    backgroundColor: "#ED56F7",
    margin: 16,
    right: 0,
    bottom: 20,
    padding: 7,
    color: '#ffff'
  },
  Inputdesabled: {
    display: 'none'
  }
});



