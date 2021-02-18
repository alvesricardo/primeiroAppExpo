import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Botao extends Component{
  render(){
    return(
    <Button>{this.props.nomeBotao}</Button>
    )
  }
}

export default Botao;