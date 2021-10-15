# Turivius *Front-End* Test #

> Teste para seleção de desenvolvedores *Front-End* da Turivius

## Desenvolvimento ##

Para o ambiente de desenvolvimento devem ser utilizados:

- Node v14.18.0
- Npm  v6.14.15
- Yarn v1.22.15

**Dependências**
- Para instalar as dependências, execute o comando ```yarn install```

**Execução**
- Para executar o app utilize o comando ```yarn dev``` e a aplicação estará disponível em [http://localhost:3000](http://localhost:3000)
- Esta aplicação também conta com uma API embutida, que pode ser acessada a partir de [http://localhost:3000/api/cards](http://localhost:3000/api/cards) ou [http://localhost:3000/api/entities](http://localhost:3000/api/entities)

**Build e Deploy**
- Para montar o projeto final utilize o comando ```yarn build```
- Para executar o build utilize o comando ```yarn start```

## Informações ##

Neste projeto você irá precisar de conhecimentos práticos em ReactJS, pois o projeto foi construído utilizando [NextJS](https://nextjs.org/).

A biblioteca de componentes visuais utilizada é a [React Suite](https://rsuitejs.com/), e você pode consultar a documentação de todos os componentes pelo site deles.

Caso você precise, pode adicionar e utilizar outras bibliotecas ao projeto, desde que não substitua a React Suite.

Caso você queira utilizar mais cores ao projeto, considere a utilização das listadas abaixo:

- ![#4965a0](https://place-hold.it/15/4965a0/000000?text=+) #4965a0
- ![#123b71](https://place-hold.it/15/123b71/000000?text=+) #123b71
- ![#001645](https://place-hold.it/15/001645/000000?text=+) #001645
- ![#b5f3f6](https://place-hold.it/15/b5f3f6/000000?text=+) #b5f3f6
- ![#84c0c3](https://place-hold.it/15/84c0c3/000000?text=+) #84c0c3
- ![#549093](https://place-hold.it/15/549093/000000?text=+) #549093
- ![#f37e00](https://place-hold.it/15/f37e00/000000?text=+) #f37e00
- ![#f4f5ff](https://place-hold.it/15/f4f5ff/000000?text=+) #f4f5ff
- ![#d6d7e9](https://place-hold.it/15/d6d7e9/000000?text=+) #d6d7e9
- ![#e61e25](https://place-hold.it/15/e61e25/000000?text=+) #e61e25
- ![#15c16b](https://place-hold.it/15/15c16b/000000?text=+) #15c16b
- ![#aaaaaa](https://place-hold.it/15/aaaaaa/000000?text=+) #aaaaaa
- ![#3a3a3a](https://place-hold.it/15/3a3a3a/000000?text=+) #3a3a3a

## Descrição do Teste ##

Um dos pilares da ferramenta da Turivius é a busca jurisprudencial, que consiste em entregar decisões de todos os tribunais a partir de uma filtragem por termos, datas, entre outros. Como cada site de tribunal tem o seu formato de exibição de dados, na Turivius precisamos pensar em um formato em comum que contemple todos os tribunais e deixe os dados acessíveis da maneira mais direta e simples para o usuário. Para isso, há algum tempo a Turivius adotou o conceito de cards para exibir as informações e ações mais importantes.

Ao executar a aplicação você irá ver uma tela com um header simples e uma listagem de cards com textos de ementas e decisões. Hoje o seu trabalho consiste em melhorar a experiência do usuário que precisa consumir essa informação!

Este projeto em NextJS possui uma API integrada que pode ser encontrada na pasta ```pages > api```. Todas as requisições devem ser feitas a partir da API!

**Exercício 1 - Melhorando o layout**

Precisamos adicionar algumas informações para facilitar a leitura das decisões. As informações são:
- Tribunal (entity)
    - Será necessário utilizar o endpoint de entidades (entities) da API
- Título (name)
- Data de publicação (data_pub)
- Data de julgamento (data_jul)
- Melhoria na apresentação dos textos de ementa e inteiro teor

A única obrigatoriedade aqui é que as informações devem ser apresentadas dentro de um card. Os elementos internos dos cards, disposição e cores podem ser alterados conforme sua criatividade.

**Exercício 2 - Adicionando ações**

Os cards possuem ações duas ações básicas que auxiliam o usuário. São elas:
- Abrir Inteiro Teor (url)
    - Pode ser em nova guia ou um modal, por exemplo
- Citar
    - Copia o texto da ementa e inteiro teor formatados para a área de transferência

Ambas ações são muito utilizadas, portanto devem estar bem aparentes nos cards e sempre com um visual agradável.

**Exercício 3 - Recebendo feedbacks**

A lista que você está construindo é uma lista de recomendações. Queremos agora saber o que o usuário achou de cada uma das decisões recomendadas. Para isso, queremos um componente que capture se o usuário gostou ou não gostou.

Ao clicar em gostei (pode ser um botão, link, ícone, ...) o card precisa apresentar visualmente que aquela opção foi avaliada positivamente.

Ao clicar em não gostei (pode ser um botão, link, ícone, ...) o card precisa apresentar visualmente que aquela opção foi avaliada negativamente.

Não é necessário salvar a informação de gostei/não gostei em um banco de dados, basta exibir a informação conforme o usuário for interagindo (se a página for recarregada tudo deve ser resetado).

## Entrega do teste ##

A versão final do teste deve ser entregue ao e-mail do entrevistador como um link do GitHub, GitLab ou outro, onde seja possível ver todos os códigos, commits, branches e afins.

## Copyright ##
Copyright © 2021 [Turivius](https://turivius.com) All Rights Reserved.

