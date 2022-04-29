import { List} from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Tarefas({item}){





    return <List.Section>
    <List.Accordion
    title={item.text}
    left={props => <List.Icon {...props} icon="folder" />}>

    <List.Item style={styles.listTask}
    title={item.text}
    description={'Detalhes Da teraf Ficarao aqui, Chave: '+item.key}
    left={props => <List.Icon {...props} icon="account-details" />}
    right={props => <List.Icon {...props} icon="delete"/>}


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