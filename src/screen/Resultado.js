import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Resultado({ route }) {
  const { nome, valorOriginal, porcentagem, aumento, novoValor } = route.params;

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tzimisce.png')} style={styles.imagem} />
      <Text style={styles.resultadoTexto}>Produto: {nome}</Text>
      <Text style={styles.resultadoTexto}>Valor Original: R$ {valorOriginal}</Text>
      <Text style={styles.resultadoTexto}>Aumento Percentual: {porcentagem}%</Text>
      <Text style={styles.resultadoTexto}>Valor do Aumento: R$ {aumento}</Text>
      <Text style={styles.resultadoTexto}>Novo Valor: R$ {novoValor}</Text>
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
  resultadoTexto: {
    color: 'black',
    fontSize: 20,
    marginVertical: 5,
  }
});