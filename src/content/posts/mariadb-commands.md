---
title: Domine os comandos essenciais do MariaDB
published: 2024-10-25
description: 'Neste post você vai aprender os comandos básicos do MariaDB'
image: 'https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/SQL/Sayuki_Ayase_Fundamentals_of_Database_Systems.png.png?raw=true'
tags: [mariadb, sql, database]
category: 'Guides'
draft: false
lang: ''
---

:::note
Você consegue rodar os comandos no site [sqliteonline](https://sqliteonline.com/)
:::

## Criar uma tabela

```sql
CREATE TABLE Clientes (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nome        VARCHAR(50) NOT NULL,
  email       VARCHAR(100) UNIQUE NOT NULL,
  telefone    VARCHAR(20),
  datanascto  DATE,
  endereco    VARCHAR(150),
  idade       INT
);
```

## Alterar a estrutura de uma tabela

```sql
ALTER TABLE Clientes
  CHANGE id clienteid 
  INT AUTO_INCREMENT PRIMARY KEY;
```

## Apagar uma tabela

```sql
DROP TABLE Clientes;
```

## Apagar um campo (coluna)

```sql
ALTER TABLE Clientes
  DROP COLUMN endereco;
```

## Incluir um campo na tabela

```sql
ALTER TABLE Clientes
  ADD COLUMN cep VARCHAR(9);
```

## Inserir dados na tabela

```sql
INSERT INTO Clientes
  (nome, email, datanascto, endereco, cep)
  VALUES
  ("Fulano de Tal", "fulano@email.com", "1980-01-01", "Rua das Flores, 123", "12345-678");
```

## Selecionar todos os registros (campos)

```sql
SELECT * FROM Clientes;
```

## Usar alias (apelidos) para campos

```sql
SELECT nome AS "Nome do Cliente" FROM Clientes;
```

## Contar o número de registros

```sql
SELECT COUNT(*) AS TotalDeRegistros FROM Clientes;
```

## Retornar valor do conjunto de dados (OVER)

```sql
SELECT nome,
  COUNT(*) OVER() AS Total
  FROM Clientes;
```

## Ordenar os dados

```sql
-- Ordenar em ordem crescente
SELECT * FROM Clientes
  ORDER BY nome ASC;
```

```sql
-- Ordenar em ordem decrescente
SELECT * FROM Clientes
  ORDER BY nome DESC;
```

## Cláusulas de condição

```sql
SELECT id, nome, cep, email
  FROM Clientes
  WHERE id < 11
  ORDER BY nome ASC;

-- O comando acima seleciona os campos id, nome, cep e email da tabela Clientes,
-- onde o id é menor que 11, ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

## Uso do operador LIKE

```sql
SELECT nome, email
  FROM Clientes
  WHERE nome LIKE '%a%';
  ORDER BY nome ASC;

-- O comando acima seleciona os campos nome e email da tabela Clientes,
-- onde o nome contém a letra "a",
-- ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

## Uso do operador IN

```sql
SELECT nome, email
  FROM Clientes
  WHERE id IN (1, 3, 5, 7, 9);
  ORDER BY nome ASC;

-- O comando acima seleciona os campos nome e email da tabela Clientes,
-- onde o id é igual a 1, 3, 5, 7 ou 9,
-- ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

## Conectivos (AND) e Disjuntivos (OR)

```sql
SELECT nome, email
  FROM Clientes
  WHERE nome LIKE '%a%' AND email LIKE '%@%';
  ORDER BY nome ASC;

-- O comando acima seleciona os campos nome e email da tabela Clientes,
-- onde o nome contém a letra "a" *E* o email contém o caractere "@",
-- ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

```sql
SELECT nome, email
  FROM Clientes
  WHERE nome LIKE '%a%' OR email LIKE '%@%';
  ORDER BY nome ASC;

-- O comando acima seleciona os campos nome e email da tabela Clientes,
-- onde o nome contém a letra "a" *OU* o email contém o caractere "@",
-- ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

## Operadores lógicos relacionais

```sql
SELECT nome, email
  FROM Clientes
  WHERE id > 10 AND id < 21;
  ORDER BY nome ASC;

-- O comando acima seleciona os campos nome e email da tabela Clientes,
-- onde o id é maior que 10 *E* menor que 21,
-- ordenando os registros pelo campo nome em ordem crescente (alfabética).
```

```sql
SELECT nome, idade
  FROM pessoas
  WHERE idade > 18
  AND sexo = "Feminino";

-- O comando acima seleciona os campos nome e idade da tabela pessoas,
-- onde a idade é maior que 18 *E* o sexo é "Feminino".
```

```sql
SELECT idade, estado
  FROM pessoas
  WHERE idade > 78
  AND estado <> "RN"
  AND estado <> "TO";

-- O comando acima seleciona os campos idade e estado da tabela pessoas,
-- onde a idade é maior que 78 *E* o estado é diferente de "RN" *E* diferente de "TO".
```

:::tip[DICA]
Outros operadores lógicos relacionais: `=`, `<>`, `>`, `<`, `>=`, `<=`.
:::

## Funções

```sql
-- SUM() - Soma
-- AVG() - Média
-- MAX() - Máximo
-- MIN() - Mínimo

SELECT SUM(idade) AS "Soma das Idades" FROM Clientes;
SELECT AVG(idade) AS "Média das Idades" FROM Clientes;
SELECT MAX(idade) AS "Maior Idade" FROM Clientes;
SELECT MIN(idade) AS "Menor Idade" FROM Clientes;
```

## Limitar o número de registros

```sql
SELECT id, idade
  FROM Clientes
  ORDER BY idade DESC
  LIMIT 1, 10;

-- O comando acima seleciona os campos id e idade da tabela Clientes,
-- ordenando os registros pelo campo idade em ordem decrescente,
-- limitando a exibição de 10 registros a partir do registro 1.
```

## Limitar o número de intervalos

```sql
SELECT nome, idade
  FROM Clientes
  WHERE idade BETWEEN 18 AND 30
  ORDER BY idade ASC;

-- O comando acima seleciona os campos nome e idade da tabela Clientes,
-- onde a idade está entre 18 e 30 anos,
-- ordenando os registros pelo campo idade em ordem crescente.
```

## Agrupar registros

```sql
SELECT estado, idade, COUNT(*) AS "Total"
  FROM Clientes
  GROUP BY estado
  ORDER BY estado, idade ASC;

-- O comando acima seleciona os campos estado, idade e o total de registros da tabela Clientes,
-- agrupando os registros pelo campo estado,
-- ordenando os registros pelo campo estado e idade em ordem crescente.
```

## Agrupamento com filtragem

```sql
SELECT estado, COUNT(*)
  FROM Clientes
  GROUP BY estado
  HAVING COUNT(*) > 10;

-- O comando acima seleciona o campo estado e o total de registros da tabela Clientes,
-- agrupando os registros pelo campo estado,
-- filtrando os registros onde o total de registros é maior que 10.
```

## Apagar uma tabela fisicamente

```sql
DROP TABLE Clientes;
```

## Apagar *TODOS* os dados de uma tabela

```sql
TRUNCATE Clientes;
```

## Atualizar um registro

```sql
UPDATE Clientes
  SET idade = 20, endereco = "Rua das Flores, 123"
  WHERE id = 1;
```

### Referências
Todo o conteúdo deste post foi baseado na aula de Modelagem de Banco de Dados, do professor [Edson M. de Souza](https://github.com/EdsonMSouza)

> ### Fonte da imagem do post
> - [Anime girls holding programming books](https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/SQL/Sayuki_Ayase_Fundamentals_of_Database_Systems.png.png)
