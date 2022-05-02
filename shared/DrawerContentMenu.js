import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContentMenu(props) {

    return(

        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>


                             <View style={styles.userInfoSection}>

                                {/* Informacoes do Usuario  */}

                                <View style={{flexDirection:'row',marginTop: 15}}>
                                    <Avatar.Image
                                        source={require('../assets/perfil.jpg')}
                                        size={50}
                                    />
                                    <View style={{marginLeft:15, flexDirection:'column'}}>
                                        <Title style={styles.title}>Armando Paulo</Title>
                                        <Caption style={styles.caption}>Meu Primeiro App React</Caption>
                                    </View>
                                </View>

                                {/* Fim Informacoes do Usuario  */}

                                {/* <View style={styles.row}>
                                    <View style={styles.section}>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                        <Caption style={styles.caption}>Following</Caption>
                                    </View>
                                    <View style={styles.section}>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                        <Caption style={styles.caption}>Followers</Caption>
                                    </View>
                                </View> */}

                            </View>



                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="briefcase-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Tarefas"
                            onPress={() => {props.navigation.navigate('Tarefas')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="phone-log"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Registros"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="cog-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Configuracoes"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Customizacao">
                        <TouchableRipple onPress={() => {console.log('toggleed');}}>
                            <View style={styles.preference}>
                                <Text>Aqui um Toggle</Text>
                                <View pointerEvents="none">
                                    <Switch/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sair"
                    onPress={() => {console.log('sair');}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });