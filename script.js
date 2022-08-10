let modelo = {
  titulo: "Minha Lista",
  itens:  [ ]
}

function adicionarItem(){
    var itemEntrada = document.getElementById("item");
    var valorEntrada = itemEntrada.value.trim();
    itemEntrada.value = "";

    var tamanho = valorEntrada.length

    if ((tamanho >= 3) && (tamanho <= 50)) {
        modelo.itens.push(valorEntrada);
        renderizar();
    
        var divMensagem = document.getElementById("mensagem");
        divMensagem.innerText = "O item " + valorEntrada + "foi aceito e inserido com sucesso!!";
      } 
      else {
        confirm("Por favor, adicione um número maior ou menor de caracteres!!");
      }
    }

function removerItem(i){
  modelo.itens.splice(i, 1);
  renderizar();
}
    
function renderizar(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  
  for (let i = 0; i < modelo.itens.length; i++){
      let item = modelo.itens[i];

      let novoItem = document.createElement("li");
      
      let botao = document.createElement("span");
      botao.textContent = "🗑";
      botao.className = "btnRemover";
      botao.onclick = function() {
         removerItem(i);
      }

      let texto = document.createElement("span");
      texto.textContent = item;

      novoItem.appendChild(botao);
      novoItem.appendChild(texto);

      lista.appendChild(novoItem);

  }
}

function limparLista() {
   modelo.itens = [];
   renderizar();
}

function bebaAgua(){
  modelo.itens.push("Beba muita água!!!");
  renderizar();
}

function ordenar(){
  modelo.itens.sort();
  renderizar();
}