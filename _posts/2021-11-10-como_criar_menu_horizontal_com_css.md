# Criando menu horizontal com css
**post-image**: ![como criar menu horizontal com css](https://i.pinimg.com/originals/68/d0/d2/68d0d2dfcfebd8cf9b97e15fc60a6511.jpg)<br>
**description**: Aprenda agora mesmo a criar um menu para seu website utilizando a display inline-block e display flex.<br>

Se você está sofrendo ao tentar criar um menu horizontal com css, agora você aprende a criar um menu facilmente utilizando a display inline-block e display flex.<br>
Para que você tenha um menu horizontal, você precisa especificar ao browser, como ele deve renderizar seu conteúdo na tela. Para isso, utilizamos os valores inline-block ou flex e você quem deve escolher a melhor alternativa para criar seu menu. No final, nosso menu vai se parecer com o da imagem.<br>

![criando menu horizontal com css](https://i.postimg.cc/rccsRXyF/criar-menu-horizontal-com-css.png)

### Criando menu com display inline-block
Por exemplo. Se eu quiser criar meu menu com a inline-block, eu faria da seguinte forma.<br>
Eu criaria uma container para amarrar o menu com a tag generica div e logo após, incluiria uma tag header dentro dessa container e adicionaria uma tag de lista não ordenada. <br>

```
<div class="container">
	<header>
		<ul class="nav-header">
			<li>Home</li>
			<li>About</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</ul>
	</header>
</div>
```

Criamos uma classe css para a tag **ul**, mas você poderia especificar está classe na header sem problemas.<br>
Em nosso código **css**, vamos agora, especificar as classes que criamos e dizer como esse conteúdo deve aparecer na tela, no seu browser. Na container, você pode dizer que ela deverá ser em bloco e terá um fundo preto ocupando todo o espaço de left a right.<br>
No segundo código abaixo depois do fechamento das chaves, iremos colocar as margens top e bottom auto e centralizar os menus, e logo em seguida, criar a formatação dos menus com as li's.<br>

```
# Container da header
.container {
	display: block;
	background-color: #000;
}

# Container do menu
header .nav-header {
	margin: auto 30px;
	text-align: center;
}

# Formatação dos menus horizontais
header .nav-header li {
	display: inline-block;
	list-style: none;
	font-family: arial, sans-serif;
	font-size: 22px;
	padding: 10px 25px;
	color: grey;
}
```

Até aqui, seu menu já está praticamente um ao lado do outro e com os devidos espaçamentos entre eles. Agora, basta criar a aparência do menu incluindo cor de fundo, ou mudando a cor das letras para outra cor, adicionando eventos de mouse, entre outros.<br>

**Importante**: Sempre que estiver criando o menu, lembre-se de dizer como isso deve aparecer na tela com propriedade display inline-block para que a lista fique uma ao lado da outra. Existem diversos valores e os mais comuns são;<br>

- display block
- display inline
- display inline-block
- display flex
- display table

**O que cada um faz**?<br>

**display block**<br>
A display block vai deixar seu conteúdo em formato de bloco ocupando praticamente toda a linha disponível de left a right, impossíbilitando a posição de outros elementos ao seu lado.<br>
Se você especificar esse valor nas li's, seu menu ficará um em cima do outro e ocupando a linha inteira de left a right.

**display inline**<br>
A display inline vai deixar seu conteúdo flexivel deixando espaços para que algum bloco ocupe o espaço nas laterais left ou right. A diferença da inline para inline-block, é que a inline, não respeita alguns valores. Se você tentar especificar margens left ou right na inline ou width, ela praticamente, vai ignorar esses valores. Faça uma simulação e tente adicionar margem ou aumentar a largura do elemento com inline.<br>

**display inline-block**<br>
A display inline-block, vai deixar seu conteúdo em formato de bloco em linha, mas não vai ocupar e impedir que outros elementos, fiquem ao seu lado.<br>
Se você tiver duas containeres genéricas e adicionar uma largura e altura, margens, esses valores serão respeitados e você conseguirá deixá-las, uma do lado da outra.

**display table**<br>
Como o próprio nome já diz, vai renderizar seu conteúdo na tela em formato de tabela.<br>

Esses são alguns valores que utilizo, mas existem outros que podem ser usados, vai depender do seu projeto e como você deseja que isso renderizará na tela para o usuário.

### Criando menu com display flex
Agora, vamos montar o mesmo cenário, porém, vamos substituir a display inline-block, por display flex. A display flex, também possui outros formatos como flex-inline, e a lógica da display flex-inline, também se aplica a mesma lógica da display inline.<br>
Com a display flex, iremos utilizar novas propriedades para renderizar esse conteúdo na tela e depois deixaremos uma alguns pontos para que você note a diferença de criar uma menu com inline-block e flex.<br>

```
# Container da header
.container {
	display: block;
	background-color: #000;
}

# Container do menu
header .nav-header {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
}

# Formatação dos menus horizontais
header .nav-header li {
	list-style: none;
	font-family: arial, sans-serif;
	font-size: 22px;
	padding: 10px 25px;
	color: grey;
}
```

Repare que novas propriedades foram adicionadas no segundo bloco de códigos pegando a header e nav-header.

**display flex**<br>
A display flex informará ao browser que seu conteúdo deve ser flexível e em linha e se o conteúdo exceder o limite de tela disponível, que a flex-wrap, quebre o conteúdo para não quebrar o layout do seu site.<br>
Você pode decidir quebrar o layout com wrap ou no-wrap para não quebrar quando o limite de tela exceder. Você também, pode especificar para que o conteúdo quebre a linha no tamanho de tela especifico utilizando a media query. Não vou falar sobre isso aqui, mas a media query é um recurso que possibilita você criar layouts responsivos para o seu site. *Pesquise sobre para saber mais*.<br>
Note que também, adicionamos a align-items center. Essa propriedade vai alinhar o conteúdo na horizontal com os demais blocos existentes.<br>

> Imagine que seu menu esteja com uma imagem representando sua logotipo e que os menus estejam ao seu lado. Se você quiser centralizar esse conteúdo horizontalmente, basta adicionar o valor de center para que os mesmo fiquem alinhados.<br>

Agora que você já utilizou as duas explicações para criar seu menu, você deve ser capaz de ver a diferença de se trabalhar com essas propriedades.<br>

Um exemplo mais comum e que você pode notar ao utilizar a display inline-block é a dificuldade em alinhar os elementos horizontalmente. Se quisessemos alinhar esse conteúdo com essa propriedade, seria necessário adicionar algumas margens ou paddins no topo e fundo para que ficassem alinhados. Com a propriedade display flex, isso já se resolve com a propriedade align-items facilmente.<br>

**Mas porque não usar align-items com a display inline-block**?<br>
Isso seria impossível, já que a propriedade align-items funciona somente quando a display flex é ativada, asssim como outras semelhantes align-self, justify-content, etc. Essa propriedade não teria efeito nenhum com a display inline-block ativa.<br>
Mas você deve estar se perguntando! Porque eu iria utilizar a display inline-block para criar meu conteúdo já que a display flex deixa tudo mais fácil? O grande problema de sempre utilizar a display flex para esse tipo de conteúdo, está na forma que o browser vai carregar sua pagina. Quanto mais propriedades display flex você adicionar no seu site, mais demorado ficará o carregamento da sua pagina. Nem sempre é necessário utilizar a display flex. Se você não precisa renderizar e alinha esse conteúdo horizontalmente, talvez utilizar a display inline-block, seja mais interessante.<br>

Conseguiu notar como isso funciona e porque não se deve usar sempre a display flex? Isso praticamente estaria afetando a otimização no seu site com muita frequência. Se quiser um site mais rápido com carregamentos superiores em diversos dispositivos, utilize a display inline-block com mais frequência e a display flex sempre que precisar fazer algo mais flexível no seu site que precise de ajustes nas laterais, fundos e topos.<br>

Para acrescentar algo mais, digamos que você estivesse utilizando um framework css para desenvolver seu menu com Bootstrap ou semelhante. Existem alguns menus prontos com estes frameworks, mas vamos criar o nosso adicionando da mesma forma que fizemos acima com a inline-block e flex, ficaria da seguinte forma.<br>

```
# Utilizando a display inline-block
<div class="container-sm-fluid">
	<header>
		<ul class="d-inline-block">
			<li>Home</li>
			<li>About</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</ul>
	</header>
</div>

# Utilizando a display flex
<div class="container-sm-fluid">
	<header>
		<ul class="d-flex flex-row flex-wrap justify-content-evenly align-middle">
			<li>Home</li>
			<li>About</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</ul>
	</header>
</div>
```

O código acima representa os mesmos exemplos iniciais, porém, utilizamos um framework css que é muito mais rápido e prático desenvolver. Lembrando, que existem alguns menus prontos, não sendo necessário criá-los desta forma.<br>

Como exemplo, no Bootstrap, você poderia criar um menu assim, conforme exemplo do site.<br>

Em nosso exemplo, não incluimos a tag nav, mas não há problemas. Eu utilizo essa tag sempre que um menu tenha muitas informações e containeres aninhados na header ou footer, mas para termos de semantica, você pode adicioná-las.<br>

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Logo abaixo, temos um snippet do menu completo para você copiar e ver como o menu ficaria na prática. Para usar, basta copiar o código e criar um novo arquivo na sua pasta local ou apenas,  baixar o arquivo para sua pasta local. Espero ajudar, e caso tenha mais dúvidas, comente ou faça uma pesquisa, pois existem muitos exemplos na internet.<br>

<script src="https://gist.github.com/ezequielsousa-devbr/59c5ed17ac542784ba9d88839a31e3fb.js"></script>