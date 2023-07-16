# Perda Mínima
Letícia possui um gráfico de preços projetados para uma casa nos próximos anos. Ela deve comprar a casa em um ano e vendê-la em outro, mas sempre com prejuízo. Ela deseja minimizar suas perdas financeiras.

Por exemplo, a casa é avaliada com os preços = [20, 15, 8, 2, 12] nos próximos 5 anos. Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. Sua perda mínima seria incorrida se ela comprasse no 2º ano com preço[1] = 15 e revendesse no 5º ano com preço[4] = 12.

Encontre e imprima o valor mínimo que Letícia deve perder ao comprar a casa e revendê-la nos próximos anos.

## Formato de Entrada
A entrada será sempre uma lista de inteiros de tamanho variável contendo os preços da casa nos próximos anos.

## Formato de Saída
A saída sempre será um número inteiro representando a perda mínima que Letícia terá.

### Exemplo de Entrada 0
```
5 10 3
```

### Exemplo de Saída 0
```
2
```

### Explicação 0
Letícia compra a casa no 1º ano com preço = 5 e a revende no 3º ano com preço = 3, resultando em uma perda de 5 - 3 = 2.
##
### Exemplo de Entrada 1
```
30 10 54 76 1 4 35
```

### Exemplo de Saída 1
```
6
```

### Explicação 1
Letícia compra a casa no 2º ano com preço = 10 e a revende no 6º ano com preço = 4, resultando em uma perda de 10 - 4 = 6.




