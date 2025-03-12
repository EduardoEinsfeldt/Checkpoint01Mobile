import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, View, TextInput } from 'react-native';

export default function Home() {
  const [nomeProduto, setNomeProduto] = useState('')
  const [valorProduto, setValorProduto] = useState('')
  const [porcentagemProduto, setPorcentagemProduto] = useState('')
  const Resultado = valorProduto * porcentagemProduto

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tzimisce.png')} style={styles.imagem} />
      <TextInput
        placeholder='Digite o nome do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={nomeProduto}
        onChangeText={(valor) => setNomeProduto(valor)}
        keyboardType='default'
      />
      <TextInput
        placeholder='Digite o valor do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={valorProduto}
        onChangeText={(valor) => setValorProduto(valor)}
        keyboardType='numeric'
      />
      <TextInput
        placeholder='Digite o valor do Produto'
        placeholderTextColor='#880808A4'
        style={styles.input}
        value={porcentagemProduto}
        onChangeText={(valor) => setPorcentagemProduto(valor)}
        keyboardType='numeric'
      />
      <Button
        title="Calcular"
        style={styles.button}
        onPress={(Resultado)}
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