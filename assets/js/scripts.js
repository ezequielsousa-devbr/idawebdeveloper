/*
Scripts para interação com pagina do projeto. Não modificar ou adicionar scripts de terceiras fontes aqui neste arquivo.
*/

// Efeito maquina de escrever

function typeWrite(elemento) {
	const textoArray = elemento.innerText.split('');

	elemento.innerHTML = "";

	textoArray.forEach((letra, i) => {
		setTimeout(function() {
			elemento.innerHTML += letra;
		}, 99 * i )
	});
};

const tituloHome = document.querySelector('.hero-title h2', '.hero-title h2 span');
typeWrite(tituloHome);

// FIM Efeito