# Ida Portifolio
Para visualizar o projeto com as particulas, você precisa instalar um servidor de teste local. O servidor pode ser que você desejar, mas para melhor ajudá-lo a configurar um servidor mais rápido, vamos criar um servidor com **Python http.server**.<br>
Para iniciar um servidor em sua maquina local, você vai precisar instalar o python, caso não o tenha instalado. Vamos usar o servidor com a versão do python **3.9.7**. Instala a versão que preferir e rode o servidor para ver as particulas em ação.<br>

Se você estiver usando Linux, provavelmente, você tem uma versão do python instalada no seu sistema. Por questões de dúvidas, execute o comando abaixo.<br>
`python --version` ou<br>
`python -V`<br>

*Caso o python não esteja instalado, utilize seu gerenciador de pacotes para baixar e instalar diretamente do repositório.*<br>

Para instalação no windows.<br>
`python-3.9.0.exe /quiet InstallAllUsers=1 PrependPath=1 Include_test=0`

Se preferir, baixe o pacote aqui para uma instalação amigavel.<br>
[Fazer download Python Versão 3. arquitetura 64bits](https://www.python.org/ftp/python/3.10.0/python-3.10.0-amd64.exe)<br>
[Fazer download Python Versão 3. arquitetura 32bits](https://www.python.org/ftp/python/3.10.0/python-3.10.0.exe)<br>

Após fazer a instalação ou com o python já instalado, basta entrar na pasta raiz do projeto e executar o comando abaixo.<br>
`python -m http.server`

Provavelmente, o servidor vai rodar na porta **8000**.<br>

Acesse seu navegador e digite.<br>
`localhost:8000` ou<br>
`http://0.0.0.0:8000` ou<br>
[clique aqui para abrir uma aba com servidor rodando](http://localhost:8000)

![screenshot ipad desktop](./assets/img/screenshot-ipad-desktop.png)