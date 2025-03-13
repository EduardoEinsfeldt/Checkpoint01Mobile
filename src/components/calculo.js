export default function calcularNovoValor(nome, valorOriginal, porcentagem) {
    if (!valorOriginal || !porcentagem || !nome) {
      alert("Preencha todos os campos!");
      return null;
    }
  
    const valor = Number(valorOriginal);
    const percentual = Number(porcentagem);
    const aumento = (valor * percentual) / 100;
    const novoValor = valor + aumento;
  
    return {
      nome,
      valorOriginal: valor,
      porcentagem: percentual,
      aumento,
      novoValor
    };
  }