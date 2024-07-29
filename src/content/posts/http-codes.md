---
title: Guia rápido sobre códigos HTTP
published: 2024-06-19
description: 'Conheça os principais códigos HTTP e suas funções'
image: 'https://http.pizza/429.jpg'
tags: [http, status code]
category: 'Guides'
draft: true
---

Existem mais de 50 códigos de status HTTP exclusivos em 5 categorias diferentes.
Felizmente, a maioria deles não são usados com frequência. Neste artigo, vamos nos concentrar nos códigos de status HTTP mais comuns e importantes que você encontrará ao navegar na web ou no desenvolvimento de APIs.

# O que são códigos HTTP?
Os códigos de status HTTP são fundamentais para entender a comunicação entre cliente e servidor na web. Eles fornecem informações rápidas e padronizadas sobre o resultado de uma solicitação, permitindo que desenvolvedores e sistemas automatizados tomem ações apropriadas com base no resultado da comunicação. Conhecer esses códigos e o que eles representam pode ajudar a diagnosticar e resolver problemas de comunicação na web de forma mais eficiente.
São divididos em 5 categorias:

- [1xx: Informacional 📢](#1xx-informacional)
- [2xx: Sucesso 🆗](#2xx-sucesso)
- [3xx: Redirecionamento 🔄](#3xx-redirecionamento)
- [4xx: Erro do cliente 🚫](#4xx-erro-do-cliente)
- [5xx: Erro do servidor 🛠](#5xx-erro-do-servidor)

:::tip[DICAS]
Se você quiser saber mais sobre códigos de status HTTP, confira a lista completa com explicações detalhadas no site [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
:::

<a name='1xx-informacional'></a>
# 1xx: Informacional 📢

O primeiro nível de códigos de status HTTP é o 100 e nenhum deles é tão comum ou importante de entender. Não são aplicáveis ao desenvolvimento de APIs ou ao uso diário na web, portanto não vamos nos aprofundar neles.

<a name='2xx-sucesso'></a>
# 2xx: Sucesso 🆗

Os códigos de status 200, por outro lado, são os mais usados e indicam que a solicitação foi bem-sucedida.

## 200 - OK
É apenas um status genérico de sucesso. Tudo o que isso diz é que a solicitação feita retornou com sucesso. Por causa disso, o código 200 é o status de fallback que pode ser aplicado para qualquer solicitação bem-sucedida quando não houver nenhum código específico para usar.

## 201 - Created
Indica que a solicitação foi bem-sucedida e que um novo recurso foi criado como resultado. É comumente relacionado ao método POST - já que a maioria das solicitações POST são feitas para criar coisas -, usado ao criar um novo registro em um banco de dados ou ao enviar um formulário.

## 202 - Accepted
O código 202 é um pouco mais específico, indicando que a solicitação foi aceita para processamento, mas a ação real da requisição - criação de um recurso, atualização de dados, etc - ainda não foi concluído. Isso é comum em APIs que precisam de tempo para executar uma tarefa específica e fica na fila para ser executada mais tarde, como por exemplo, ao enviar um e-mail ou processar um pagamento.

## 204 - No Content
O status 204 significa que a solicitação foi bem-sucedida, mas não há conteúdo para retornar. Isso é comum com solicitações DELETE, pois geralmente não há dados para retornar no corpo da requisição após a exclusão de um recurso.

<a name='3xx-redirecionamento'></a>
# 3xx: Redirecionamento 🔄

Os códigos de status 300 tratam de redirecionamentos. Se uma página foi movida para um novo URL, ou se o servidor deseja que o cliente acesse um recurso em um local diferente, um código 300 será retornado.

## 301 - Moved Permanently
O código 301 é um redirecionamento permanente. Isso significa que o recurso solicitado foi movido para um novo URL e não estará mais disponível no URL original. Isso é comum quando um site é movido para um novo domínio ou quando URLs são alterados. Também fará com que os mecanismos de pesquisa associem todos os dados do URL antigo ao novo, assim não perderá o ranking de SEO.

## 302 - Found
Semelhante ao status 301, é usado para informar o cliente que a página está em um novo URL, mas esta é uma alteração temporária. isso significa que os mecanismos de busca não substituirão o URL antigo pelo novo. É útil se precisa enviar um usuário para uma versão diferente da mesma página, mas não deseja que essa versão da página substituta seja indexada.

## 304 - Not Modified
O status 304 é um pouco diferente dos outros códigos de redirecionamento. É usado para armazenamento em cache e apenas indica que o recurso solicitado não mudou. Quando um cliente tenta acessar uma página antes que o período de cache tenha expirado, o servidor retornará um 304 para evitar a transferência de dados desnecessária.

<a name='4xx-erro-do-cliente'></a>
# 4xx: Erro do cliente 🚫

Os códigos 400 representam qualquer erro ocorrido devido a uma solicitação inválida feita pelo cliente. Isso pode ser causado por uma variedade de razões, como enviar dados inválidos, tentar acessar um recurso que não existe ou não ter a permissão para acessar.

## 400 - Bad Request
Semelhante ao status 200, o código 400 representa um erro genérico. Isso indica que os dados enviados para a solicitação (parâmetros de URL, JSON, etc) estão incorretos, mal formatados ou ausentes. Isso é comum ao fazer solicitações POST ou PUT, onde os dados enviados não correspondem ao que o servidor espera. Por exemplo, se você tentar enviar uma solicitação para criar um novo usuário, mas não fornecer um e-mail, o servidor retornará um status 400 para informar que o campo de e-mail é obrigatório.

## 401 - Unauthorized
O status 401 é retornado quando o cliente tenta acessar um recurso que requer autenticação. Isso é comum ao tentar acessar uma API protegida por senha ou token de acesso. Se você tentar acessar um recurso sem fornecer as credenciais corretas, o servidor retornará o código 401 para informar que você não tem a permissão.

## 403 - Forbidden
O status 403 é usado para lidar com permissões, informando ao cliente que ele não tem o acesso ao recurso solicitado. Isso é comum ao tentar acessar uma página que requer um nível de permissão superior ao que você possui. Por exemplo, se você tentar acessar uma página de administração sem estar autenticado como administrador, o servidor retornará um status 403 para informar que você não tem permissão para acessar essa página.

## 404 - Not Found
O status 404 é um dos mais conhecidos e indica que o recurso solicitado não foi encontrado. Isso é comum ao tentar acessar uma página que não existe ou um recurso que foi removido.

## 429 - Too Many Requests
429 é o código usado para lidar com limitação de taxa. Isso significa que o cliente fez muitas solicitações em um curto período de tempo e o servidor está recusando a solicitação para evitar a sobrecarga. Isso é comum em APIs públicas que limitam o número de solicitações que você pode fazer em um determinado período de tempo.

<a name='5xx-erro-do-servidor'></a>
# 5xx: Erro do servidor 🛠

Os códigos 500 são semelhantes ao 400, mas representam um erro no lado do servidor, em vez de um erro do cliente.

## 500 - Internal Server Error
O status 500 é um erro genérico que indica que algo deu errado no servidor. Isso pode ser causado por uma variedade de razões, como um erro de programação, um banco de dados inacessível ou um serviço de terceiros que não está respondendo. Deve ser usado em qualquer situação em que o servidor apresente um erro e não exista um código mais específico aplicável.

## 503 - Service Unavailable
Indica que o servidor não está disponível no momento. Isso pode ser causado por uma manutenção planejada no servidor, que ficará inativo durante esse período.

> ### Fonte da imagem do post
> - [HTTP Status Pizza](https://http.pizza/)
