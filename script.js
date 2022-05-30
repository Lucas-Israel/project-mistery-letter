const inpCartaTexto = document.querySelector('#carta-texto');
const btnCriarCarta = document.querySelector('#criar-carta');
const paragCartaGerada = document.querySelector('#carta-gerada');

function checkSpan() {
  const elem = document.querySelectorAll('span');
  if (elem) {
    for (let index = 0; index < elem.length; index += 1) {
      elem[index].remove();
    }
  }
}

btnCriarCarta.addEventListener('click', () => {
  paragCartaGerada.innerText = '';
  const peguei = inpCartaTexto.value;
  const usingSplit = peguei.split(' ');
  checkSpan();
  if (inpCartaTexto.value === '' || inpCartaTexto.value === ' ') {
    paragCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index2 = 0; index2 < usingSplit.length; index2 += 1) {
      const crndSpn = document.createElement('span');
      crndSpn.innerText = usingSplit[index2];
      paragCartaGerada.appendChild(crndSpn);
    }
  }
});
