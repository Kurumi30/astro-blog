---
title: Git e GitHub - Tutorial básico
published: 2024-09-22
description: 'Aprenda a usar o Git e o GitHub para gerenciar seus projetos'
image: 'https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Git/Gestella_from_eleceed_Aprendiendo_Git_Github.png?raw=true'
tags: [git, github]
category: 'Guides'
draft: false
lang: ''
---

# O que é Git?

Git é um sistema de controle de versão (VCS - Version Control System), permite que você mantenha o controle das mudanças feitas em seus arquivos ao longo do tempo.

## Principais funcionalidades do Git

- **Controle de versão**: mantém um histórico de todas as alterações feitas em seus arquivos.
- **Colaboração**: permite que várias pessoas trabalhem no projeto ao mesmo tempo.
- **Rastreamento de mudanças**: você pode ver quem fez o que e quando.
- **Ramificação**: você pode criar ramificações para trabalhar em novas funcionalidades sem afetar a versão principal.

# O que é GitHub?

GitHub é uma plataforma online que permite que os desenvolvedores hospedem seus repositórios de código e colaborarem em projetos com outros programadores ao redor do mundo.

## Principais funcionalidades do GitHub

- **Colaboração**: permite que você trabalhe com outras pessoas em um projeto.
- **Controle de acesso**: você pode controlar quem pode ver e editar seus projetos.
- **Integração contínua**: você pode automatizar tarefas como testes e implantação.

# Instalando o Git

Para instalar o Git na sua máquina, siga as instruções no site oficial clicando [aqui](https://git-scm.com/downloads).

Você pode verificar se o Git foi instalado corretamente executando o seguinte comando no terminal (no Windows, você pode usar o Git Bash):

```bash
git --version
# ou para os preguiçosos:
git -v

# Será mostrada a versão do Git instalada na sua máquina.
```

# Configurando o Git

Antes de começar a usar, é necessário configurar o Git.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@email.com"
```

# Criando um repositório Git

Repositório é um espaço onde os arquivos do projeto são armazenados e gerenciados.
Para iniciar um repositório, crie uma pasta chamada meu-repositorio, abra o terminal e execute os seguintes comandos:

```bash
cd meu-repositorio # Acesse a pasta do projeto

# Inicialize o repositório
git init
```

Após executar o comando `git init`, um diretório oculto chamado `.git` será criado no local.

# Adicionando arquivos ao repositório

Na pasta do projeto, crie um arquivo chamado `meu-arquivo.txt` e escreva algo nele. Agora execute o seguinte comando:

```bash
git add meu-arquivo.txt
```

O comando `git add` adiciona o arquivo ao índice (index), que é uma área temporária onde as alterações são preparadas para serem confirmadas.

:::tip[DICA]
Você pode adicionar todos os arquivos de uma vez usando o comando `git add .`
:::

Existem 3 formas de alteração que são salvas no index:

- **create mode**: quando um arquivo é adicionado pela primeira vez.
- **delete mode**: quando um arquivo é deletado.
- **file changed**: quando um arquivo é alterado, podendo haver inserções e remoções (insertions(+) e deletions(-)).

# Visualizando o status do repositório

Use o comando abaixo para ver o status do repositório e os arquivos que foram modificados, adicionados ou removidos.

```bash
git status
```

# Removendo alterações

Terminar depois...

> Fonte da imagem do post
> - [Anime girls holding programming books](https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Git/Gestella_from_eleceed_Aprendiendo_Git_Github.png)
