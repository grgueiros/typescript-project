# TypeScript Project

Projeto desenvolvido com typescript que se utiliza do MVC (Model,View and Controller) para uma aplicação que valida um formulário de Negoiações e está preparada para importar negociações de um servidor.

A tipagem estática do typescript favorece a utilização e manutenção do código.

Seguindo o padrão de projeto escolhido, tem-se um Controller que é responsável pela chamada dos métodos que irão, de fato, gerar a interação com o usuário.

Este controller faz uso de Modelos: classes que representam a negociação ou uma lista de negociações. Interfaces que definem algumas propriedades de negociação também são usadas, além de agregarem à tipagem com o uso do polimorfismo.

A view é camada do projeto que representa visualmente as alterações geradas pela interação do usuário, é a parte que altera de fato o html.

(projeto desenvolvido durante o curso de TypeScript da Alura - Cursos de Tecnologia)
