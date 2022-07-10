function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET",url,false)
  request.send()
  return request.responseText
}
function criaLinha(produto){
  console.log(produto);
  linha= document.createElement("tr");
  tdid= document.createElement("td");
  tdnome=document.createElement("td");
  tdquantidade=document.createElement("td");
  tdvalor=document.createElement("td");
  tdid.innerHTML = produto.id;
  tdnome.innerHTML = produto.nome;
  tdquantidade.innerHTML=produto.quantidade;
  tdvalor.innerHTML=produto.valor;

  linha.appendchild(tdid);
  linha.appendchild(tdnome);
  linha.appendchild(tdquantidade);
  linha.appendchild(tdvalor);

  return linha;
}
function main(){
 let data= fazGet("http://localhost:8080/api/produtos")
 let produtos = JSON.parse(data);
 let tabela=document.getElementById("tabela");
 produtos.forEach(element => {
   let linha= criaLinha(element);
   tabela.appendchild(linha);
 });

}
 main ()