export const formatarPreco = (valor) => valor.toFixed(2);

export const calcularTotal = (produtos) =>
  produtos.reduce((total, p) => total + p.preco, 0);

export const validarProduto = (nome, preco) => {
  return nome.trim() !== "" && !isNaN(preco) && preco > 0;
};
