import { Produto } from "./classes.js";
import { calcularTotal, formatarPreco, validarProduto } from "./utils.js";

const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const totalSpan = document.getElementById("total");

let produtos = [];

// Renderização (função pura-ish)
const renderizar = () => {
  lista.innerHTML = "";

  produtos.map((produto, index) => {
    const li = document.createElement("li");
    li.textContent = `${produto.nome} - R$ ${formatarPreco(produto.preco)}`;

    lista.appendChild(li);
  });

  const total = calcularTotal(produtos);
  totalSpan.textContent = formatarPreco(total);
};

// Evento
botao.addEventListener("click", () => {
  const nome = nomeInput.value;
  const preco = parseFloat(precoInput.value);

  if (!validarProduto(nome, preco)) {
    alert("Dados inválidos!");
    return;
  }

  const novoProduto = new Produto(nome, preco);
  produtos = [...produtos, novoProduto]; // imutabilidade (funcional)

  renderizar();

  nomeInput.value = "";
  precoInput.value = "";
});
