import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

export default function Home() {
  const [nomeProduto, setNomeProduto] = useState('')
  const [valorProduto, setValorProduto] = useState('')
  const [porcentagemProduto, setPorcentagemProduto] = useState('')

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tzimisce.png')} style={styles.imagem} />
      <TexInput
        placeholder='Digite o nome do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={nomeProduto}
        keyboardType='default'
      />
      <TexInput
        placeholder='Digite o valor do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={valorProduto}
        keyboardType='default'
      />
      <TexInput
        placeholder='Digite o valor do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={porcentagemProduto}
        keyboardType='default'
      />
      <Button
        title="Calcular"
        style={styles.button}

        color='black'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880808',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagem: {
    resizeMode: "center",
    width: 250,
  },
  input: {
    backgroundColor: 'black',
    width: 300,
    borderRadius: 20,
    color: 'red',
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 20,
    placeholderTextColor: 'red'
  },
  input2: {
    backgroundColor: 'black',
    width: 300,
    borderRadius: 20,
    color: 'red',
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 20,
    placeholderTextColor: 'red'
  },
});