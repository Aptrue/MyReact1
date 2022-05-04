import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Estilo } from '../styles/globalStyleSheet';

import { DrawerActions } from '@react-navigation/native';



const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



export default function  HeaderShared ({pageName, navigation})  {


  const openMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }



 return (

        <Appbar.Header style={Estilo.header}>
        <Appbar.Action icon="menu" color='#ffff' onPress={openMenu} />
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title={pageName}  titleStyle={Estilo.headerTitle}/>
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
        </Appbar.Header>

        )
 }