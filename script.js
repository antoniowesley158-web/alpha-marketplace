// Fundo animado simples
const fundo = document.getElementById('fundo-animado');
for(let i=0;i<50;i++){
  const p = document.createElement('div'); p.className='particula';
  p.style.width = p.style.height = Math.random()*5+2+'px';
  p.style.top = Math.random()*100+'%';
  p.style.left = Math.random()*100+'%';
  fundo.appendChild(p);
}

// Avisos animados
export function mostrarAviso(msg){
  const aviso = document.getElementById('aviso');
  aviso.innerText = msg;
  aviso.style.display='block';
  setTimeout(()=>{ aviso.style.display='none'; },2500);
}

// Menu lateral abrir/fechar
const menu = document.getElementById('menu-lateral');
const abrirMenuBtn = document.getElementById('abrir-menu');
const voltar = document.getElementById('voltar');

abrirMenuBtn.addEventListener('click', ()=>{
  menu.style.left = '0';
});

voltar.addEventListener('click', ()=>{
  menu.style.left = '-250px';
});

// Adicionar produto (exemplo)
const btnAddProduto = document.getElementById('adicionar-produto');
if(btnAddProduto){
  btnAddProduto.addEventListener('click', ()=>{
    mostrarAviso('Produto adicionado com sucesso!');
  });
}

// Enviar avaliação (exemplo)
const formAvaliacao = document.getElementById('form-avaliacao');
if(formAvaliacao){
  formAvaliacao.addEventListener('submit', e=>{
    e.preventDefault();
    mostrarAviso('Avaliação enviada!');
  });
}