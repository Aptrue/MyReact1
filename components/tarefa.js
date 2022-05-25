import { List, IconButton } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Tarefas({allTask,item, navigation}){



    return <List.Section>
    <List.Accordion

    title={item.text}
    left={props => <List.Icon {...props} icon="folder" />}>

    <List.Item
    onPress={() => {navigation.navigate('Detalhes', item)}}
    title={item.text}
    description={'Detalhes   Ficarão aqui, Chave: '+item.key}
    left={props => <List.Icon {...props} icon="account-details" />}
    right={props => <IconButton {...props} color="#ED56F7" icon="delete" onPress={() => {

       Alert.alert('Aviso', 'Tem certeza que deseja deletar?',

       [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "SIM", onPress:  () => console.log(item) }
      ]

       );



    }}/>}


    />
</List.Accordion>
</List.Section>
}



const styles = StyleSheet.create({
    listTask:{
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 10,
      shadowColor: 'red',
      backgroundColor: '#FCFCFB',
    },

  accordionStyle:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  });