import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImageReact from './src/Components/ImageReact'
import BemVindo from './src/Components/BemVindo'
import Botao from './src/Components/Botao'

class App extends Component{
  render(){
     let nome = 'Ricardo';
     return(
      <View style={styles.container}>
        <BemVindo></BemVindo>
        <Text style={{color: '#FF0000', fontsize: 25}}>Seja bem vindo a nossa plataforma {nome}</Text>
        <ImageReact largura={400} altura={400} nomeImagem='React IOS Android'></ImageReact>
        <Botao nomeBotao="Entrar"></Botao>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin:20,
    justifyContent: 'Center',
    AlignItems: 'Center'
  }
})

export default App;