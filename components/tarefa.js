import { List, IconButton } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Tarefas({item, removerTarefa}){



    return <List.Section>
    <List.Accordion
    title={item.text}
    left={props => <List.Icon {...props} icon="folder" />}>

    <List.Item style={styles.listTask}
    title={item.text}
    description={'Detalhes   Ficarão aqui, Chave: '+item.key}
    left={props => <List.Icon {...props} icon="account-details" />}
    right={props => <IconButton {...props} icon="delete" onPress={() => {

       Alert.alert('Aviso', 'Tem certeza que deseja deletar?',

       [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "SIM", onPress:  () => removerTarefa }
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
    }

  });