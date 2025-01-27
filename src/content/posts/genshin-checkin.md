---
title: Como fazer check-in diário no Genshin Impact usando Node.js
published: 2025-01-26
description: E se usarmos a programação para fazer o check-in diário no Genshin Impact?
image: https://upload-os-bbs.hoyolab.com/upload/2025/01/26/423875824/babd6d552ea0572ae90483188c4f6a7e_5972990152846646708.gif
tags: [genshin, nodejs, hoyolab, mihoyo]
category: Games
draft: false
lang: pt-br
---

# Introdução
Se você é um jogador F2P, sabe que é importante fazer o check-in diário para ganhar recompensas.
É possível realizar o checkin mandando uma requisição POST para a API do Hoyolab. Neste tutorial, iremos usar apenas o Node.js, sem a necessidade de instalar dependências.

# Antes de começar
Certifique-se de que você tenha o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo [aqui](https://nodejs.org/). Recomendo que use a versão >= 20 porque tem a flag `--env-file` para carregar as variáveis de ambiente.

```bash
# Verifique a versão do Node.js
node -v

# Para verificar se o npm está instalado
npm -v
```

# 1. Iniciando o projeto

Crie um diretório para o projeto e entre nele.

```bash
mkdir genshin-checkin # Você pode escolher outro nome

cd genshin-checkin
```

Inicie o projeto usando o `npm`

```bash
npm init -y
```

Com isso, um arquivo chamado `package.json` será criado:

```json
{
  "name": "genshin-checkin",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Vamos alterar o script:

```json
"scripts": {
  "start": "node --env-file=.env index.js"
},
```

Dentro do diretório, crie um arquivo chamado `index.js`.

```bash
touch index.js
```

Crie um arquivo chamado `.env` e adicione as variáveis de ambiente:

```bash
touch .env
```

```bash
# Coloque as informações da sua conta
LTUID_V2=
LTOKEN_V2=
```

## Como obter as variáveis de ambiente

- Entre no site do [Hoyolab](https://www.hoyolab.com/home) e faça login.
- Abra o devtools (atalho: F12) e vá para a aba Aplicativo (se estiver em inglês, será Application).
- Procure pelos cookies `ltuid` e `ltoken` e copie o valor de cada um e cole no arquivo `.env`.

<p align="center">
  <img src="https://files.catbox.moe/flw7hm.png" alt="Como obter as variáveis de ambiente" />
</p>

# 2. Escrevendo o código

Depois de obter as variáveis de ambiente, vamos escrever o código. No seu arquivo `index.js`, vamos declarar as variáveis importantes para a requisição.

```js
// Pegar as variáveis de ambiente
const ltuid_v2 = process.env.LTUID_V2
const ltoken_v2 = process.env.LTOKEN_V2

// Juntar as variáveis de ambiente em um cookie
const cookie = `ltuid_v2=${ltuid_v2}; ltoken_v2=${ltoken_v2}`

// URL da API
const endpoint = 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?act_id=e202102251931481'

// Idioma
const defaultLanguage = 'pt-pt'
```

Criaremos uma função para fazer a requisição POST.

```js
async function main() {
  // Verificar se o cookie foi configurado
  if (!cookie) throw new Error('Cookie não definido!')

  // Cria um novo objeto URL a partir do endpoint fornecido
  // Obtém o valor do parâmetro de consulta 'act_id' da URL e o armazena na constante 'actId'
  const url = new URL(endpoint)
  const actId = url.searchParams.get('act_id')

  // Configura o idioma
  url.searchParams.set('lang', defaultLanguage)
}
```

Embaixo da função `main()` vamos criar outra função para manipular o cabeçalho da requisição.

```js
async function main() {
  // ...
}

function setHeaders(cookie) {
  const headers = new Headers()

  headers.set('accept', 'application/json, text/plain, */*')
  headers.set('accept-encoding', 'gzip, deflate, br, zstd')
  headers.set('accept-language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5')
  headers.set('connection', 'keep-alive')
  headers.set('origin', 'https://act.hoyolab.com')
  headers.set('referrer', 'https://act.hoyolab.com')
  headers.set('content-type', 'application/json;charset=UTF-8')
  headers.set('cookie', cookie) // A variável cookie é passada como argumento
  headers.set('sec-ch-ua', '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"')
  headers.set('sec-ch-ua-mobile', '?0')
  headers.set('sec-ch-ua-platform', '"Linux"')
  headers.set('sec-fetch-dest', 'empty')
  headers.set('sec-fech-mode', 'cors')
  headers.set('sec-fetch-site', 'same-site')
  headers.set('sec-gpc', '1')
  headers.set('user-agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')

  return headers
}
```

Voltando para a função `main()`, usaremos o método `fetch` para fazer a requisição POST.

```js
async function main() {
  // Verificar se o cookie foi configurado
  if (!cookie) throw new Error('Cookie não definido!')

  // Cria um novo objeto URL a partir do endpoint fornecido
  // Obtém o valor do parâmetro de consulta 'act_id' da URL e o armazena na constante 'actId'
  const url = new URL(endpoint)
  const actId = url.searchParams.get('act_id')

  // Configura o idioma
  url.searchParams.set('lang', defaultLanguage)

  // Faz a requisição POST
  try {
    const request = await fetch(url, {
      method: 'POST', // Método POST
      headers: setHeaders(cookie), // Cabeçalho
      body: JSON.stringify({
        lang: defaultLanguage,
        act_id: actId,
      }),
    })
    // Converte a resposta em JSON
    const response = await request.json()
  } catch (err) {
    // Se houver um erro, exibe no console
    console.error(`[!] Resposta inesperada: ${err}`)
  }
}
```

Criaremos uma função que vai manipular a resposta da requisição. Embaixo da função `setHeaders()`:

```js
function setHeaders(cookie) {
  // ...
}

function handleResponse({ message, retcode }) {
  // Se a mensagem for 'OK' ou o retcode for 0, exibe a mensagem de sucesso
  if (message === 'OK' || retcode === 0) return console.info(`[+] ${message}: Checkin feito com sucesso!`)

  // Se a mensagem incluir 'already' ou o retcode for -5003, o checkin já foi feito
  if (message.includes('already') || retcode === -5003) {
    console.info(`[+] ${message}`)

    return process.exit(0)
  }

  // Se a mensagem for 'Not logged in' ou o retcode for -100, significa que não está logado
  if (message === 'Not logged in' || retcode === -100) return console.error(`[!] Erro ao logar: ${message}`)
}
```

Voltando para a função `main()`, vamos chamar a função `handleResponse()`.

```js
// Converte a resposta em JSON
const response = await request.json()

// Manipula a resposta
handleResponse(response)
```

## Código completo

Estará disponível no meu [GitHub](https://github.com/Kurumi30/genshin-checkin) também!

```js
const ltuid_v2 = process.env.LTUID_V2
const ltoken_v2 = process.env.LTOKEN_V2
const cookie = `ltuid_v2=${ltuid_v2}; ltoken_v2=${ltoken_v2}`
const endpoint = 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?act_id=e202102251931481'
const defaultLanguage = 'pt-pt'

async function main() {
  if (!cookie) throw new Error('Cookie não definido!')

  const url = new URL(endpoint)
  const actId = url.searchParams.get('act_id')

  url.searchParams.set('lang', defaultLanguage)

  try {
    const request = await fetch(url, {
      method: 'POST',
      headers: setHeaders(cookie),
      body: JSON.stringify({
        lang: defaultLanguage,
        act_id: actId,
      }),
    })
    const response = await request.json()

    handleResponse(response)
  } catch (err) {
    console.error(`[!] Resposta inesperada: ${err}`)
  }
}

function setHeaders(cookie) {
  const headers = new Headers()

  headers.set('accept', 'application/json, text/plain, */*')
  headers.set('accept-encoding', 'gzip, deflate, br, zstd')
  headers.set('accept-language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5')
  headers.set('connection', 'keep-alive')
  headers.set('origin', 'https://act.hoyolab.com')
  headers.set('referrer', 'https://act.hoyolab.com')
  headers.set('content-type', 'application/json;charset=UTF-8')
  headers.set('cookie', cookie)
  headers.set('sec-ch-ua', '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"')
  headers.set('sec-ch-ua-mobile', '?0')
  headers.set('sec-ch-ua-platform', '"Linux"')
  headers.set('sec-fetch-dest', 'empty')
  headers.set('sec-fech-mode', 'cors')
  headers.set('sec-fetch-site', 'same-site')
  headers.set('sec-gpc', '1')
  headers.set('user-agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')

  return headers
}

function handleResponse({ message, retcode }) {
  if (message === 'OK' || retcode === 0) return console.info(`[+] ${message}: Checkin feito com sucesso!`)
  if (message.includes('already') || retcode === -5003) {
    console.info(`[+] ${message}`)

    return process.exit(0)
  }
  if (message === 'Not logged in' || retcode === -100) return console.error(`[!] Erro ao logar: ${message}`)
}
```

# 3. Rodando o script

Para rodar o script, execute o comando no seu terminal:

```bash
npm start
```

# 4. Faça você mesmo

Você pode adicionar um cronjob para rodar o script diariamente. Para isso, você pode usar o [cron-job.org](https://cron-job.org/).

> Cronjob: é um agendador de tarefas que executa comandos em horários específicos.

# 5. Observações

O intuito deste tutorial é mostrar como fazer o check-in sem a necessidade de instalar dependências. Mas, se você quiser, pode usar pacotes para facilitar o desenvolvimento.

Se não tiver a versão >= 20 do Node.js, use o pacote `dotenv` para carregar as variáveis de ambiente.

```bash
npm i -D dotenv
```

No seu arquivo `index.js`, adicione:

```js
require('dotenv').config()
```

Você pode usar o `axios` para fazer as requisições.

```bash
npm i axios
```
Documentação do [axios](https://axios-http.com/ptbr/).

:::warning[Atenção]
- Este script não é garantido que funcionará para sempre, pois a Mihoyo pode mudar a API a qualquer momento.
- Não abuse do script, pois a Mihoyo pode banir sua conta.
:::

> ### Fonte da imagem do post
> - [Hoyolab](https://www.hoyolab.com/circles/2/30/feed?page_type=30&page_sort=hot)
