import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class ImageReact extends Component {
  render(){
    let imagem = 'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps.png'
    return(
      <View>
        <Image>
          source = {{uri : imagem}}
          style = {{width: this.props.largura, height: this.props.altura}}
        </Image>
        <Text>{this.props.nomeImagem}</Text>
        <Text>Clique para acessar</Text>
      </View>
    )
  }
}

export default ImageReact;