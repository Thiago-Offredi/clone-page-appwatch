// para pegar informação no array nome do array + posição do array[]
// para pegar informação no objeto usa nome da variavel.nome do objeto

const imageView = document.getElementById("imagem-visualizacao");
const titleProduto = document.getElementById("titulo-produto");
const secondTitle = document.getElementById("nome-cor-selecionada");
const miniatureOne = document.getElementById("0-imagem-miniatura");
const miniatureTwo = document.getElementById("1-imagem-miniatura");
const miniatureThree = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};
const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const optionColors = [
  verdeCipreste,
  azulInverno,
  meiaNoite,
  estelar,
  rosaClaro,
];
const optionsSize = ["41 mm", "45 mm"];

let selectedImage = 1;
let selectdSize = 1;
let selectdColor = 1;

function changeBoxSize() {
  // atualizar variavel do tamanho da caixa

  const idBoxSelected = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  selectdSize = idBoxSelected.charAt(0);
  // mudar o titulo do produto
  titleProduto.innerText =
    "Pulseira loop esportiva " +
    optionColors[selectdColor].nome +
    " para caixa de " +
    optionColors[selectdColor].nome +
    " 45 mm ";

  //mudar o tamanho da imagem de acordo com a ação
  if (optionsSize[selectdSize] === "41 mm") {
    imageView.classList.add("caixa-pequena");
  } else {
    imageView.classList.remove("caixa-pequena");
  }

  //imageView.classList.remove('.caixa-pequena')
}

function changeColors() {
  // atualizar cor da variavel
  const idSelectedOption = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  selectdColor = idSelectedOption.charAt(0);
 
  // mudar o titulo da pagina
  titleProduto.innerText =
    "Pulseira loop esportiva " +
    optionColors[selectdColor].nome +
    " para caixa de " +
    optionColors[selectdColor].nome +
    " 45 mm ";

  //mudar o p da cor

  secondTitle.innerText = "Cor - " + optionColors[selectdColor].nome;

  // mudar a cor do app watch exibidas
    miniatureOne.src ='./imagens/opcoes-cores/' + optionColors[selectdColor].pasta + '/imagem-0.jpeg'
    miniatureTwo.src ='./imagens/opcoes-cores/' + optionColors[selectdColor].pasta + '/imagem-1.jpeg'
    miniatureThree.src ='./imagens/opcoes-cores/' + optionColors[selectdColor].pasta + '/imagem-2.jpeg'
  // trocar imagem de vizualização
  imageView.src= './imagens/opcoes-cores/' + optionColors[selectdColor].pasta + '/imagem-' + selectedImage + '.jpeg';

}

function changeImage() {
  const idSelectedOption = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id; // dentro do input o elemento que estiver checked, a opção que o usuário selecionar

  selectedImage = idSelectedOption.charAt(0);
  imageView.src= './imagens/opcoes-cores/' + optionColors[selectdColor].pasta + '/imagem-' + selectedImage + '.jpeg';

}
 