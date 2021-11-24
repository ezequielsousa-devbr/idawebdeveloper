# Ida Portifolio
Para ver o projeto demo, instale os seguintes pacotes.<br>

**Instalação**<br>
- Rubygems
- Jekyll
- bundler

**Download Rubygems**<br>
[https://rubygems.org/](https://rubygems.org/pages/download)

`gem update --system`

`ruby setup.rb --help`

`gem install bundle jekyll`

Após instalação, entre na pasta raiz do projeto e rode os comandos.<br>

**Instalação das e Atualização**<br>

```
bundle install
bundle update
```

**Rodando o Servidor**<br>

```
bundle exec jekyll serve
```

Geralmente, a porta padrão do servidor é **4000**.<br>

Ao rodar o comando e coexistir um erro, você pode tentar os seguintes comandos.<br>

```
# para ver a saída do erro em vermelho para melhor identificação
bundle exec jekyll serve --trace

# pacote que pode corrigir o problema
bundle add webrick
```

**Clique Aqui Após Iniciação Servidor**<br>
[http://localhost:4000](http://localhost:4000)

## Instruções

**_includes**<br>
Pasta que contém os blocos de construção dos layouts<br>

**_layouts**<br>
Pasta que possui estrutura básica do site<br>

**pages**<br>
Parte integrante do layout.<br>

**_data**<br>
Pasta possui arquivos para inserir novas informações nas paginas **portifolio** e **serviços**.<br>

**_config.yml**<br>
Arquivo de configurações básico do site.<br>

As modificaçõe de conteúdo podem ser feitas na pasta **_includes**. Tenha cuidado para não modificar as tags e quebrar a estrutura do site.<br>

![screenshot ipad desktop](./assets/img/screenshot-ipad-desktop.png)