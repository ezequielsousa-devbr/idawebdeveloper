/*
Scripts para interação com pagina do projeto. Não modificar ou adicionar scripts de terceiras fontes aqui neste arquivo.
*/

// Efeito maquina de escrever
function typeWrite(elemento) {
	const textoArray = elemento.innerText.split('');

	elemento.innerHTML = "";

	textoArray.forEach((letra, i) => {
		setTimeout(function() {
			elemento.textContent += letra;
		}, 99 * i )
	});
};

const tituloHome = document.querySelector('.hero-title h2', '.hero-title h2 span');

tituloHome.style.color = "#dc3545";
tituloHome.style.filter = "brightness(1.2)", "saturate(2)";
// tituloHome.style.backgroundColor = "rgba(220, 53, 69, 0.5)";
tituloHome.style.padding = "5px";
tituloHome.style.borderRadius = "5px";

typeWrite(tituloHome);

// FIM Efeito