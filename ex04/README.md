# Carrossel de Imagens
Neste projeto, você será responsável por programar um carrossel de imagens em um site. O carrossel permite que o usuário avance ou retorne para as imagens usando botões direcionais. O carrossel não avança automaticamente, ou seja, a imagem só mudará quando o usuário clicar nos botões direcionais.

Cada imagem é representada por um item em um array. O carrossel possui 7 imagens, armazenadas nos índices de 0 a 6 do array.

O seu objetivo é calcular o índice da imagem que deve ser exibida com base na quantidade de cliques nos botões direcionais.

Cada clique no botão direcional para a direita avança uma imagem, enquanto cada clique no botão direcional para a esquerda retrocede uma imagem.

Se o usuário estiver na última imagem e clicar para a direita, ele voltará para a primeira imagem.

Se o usuário estiver na primeira imagem e clicar para a esquerda, ele voltará para a última imagem.

A sequência de cliques realizada pelo usuário é fornecida como uma string contendo apenas os caracteres '>' e '<'.

Por exemplo, a sequência de cliques '>>><>' indica que o usuário clicou 3 vezes para a direita, seguido por uma vez para a esquerda e novamente uma vez para a direita. Como o carrossel sempre começa na primeira imagem, que está no índice 0, isso significa que ele avançou do índice 0 para o índice 3, voltou para o 2 e avançou novamente para o 3. Portanto, nesse exemplo, o programa deve imprimir o número 3.

## Formato de Entrada
A entrada consistirá sempre em uma única variável chamada sequencia, que contém uma sequência de caracteres '>' ou '<', indicando os cliques realizados pelo usuário.

## Formato de Saída
A saída será sempre um número inteiro positivo entre 0 e 6, indicando o índice da imagem que será exibida na tela após o usuário realizar todos os cliques descritos na sequência.

## Exemplo
### Entrada de Amostra 0
```
>>><>
```

### Saída de Amostra 0
```
3
```
Neste exemplo, o usuário clicou três vezes para a direita, voltou uma vez para a esquerda e novamente uma vez para a direita. Após esses cliques, a imagem exibida será aquela no índice 3.
##
### Entrada de Amostra 1
```
>
```

### Saída de Amostra 1
```
1
```
Neste exemplo, o usuário clicou uma vez para a direita. Após esse clique, a imagem exibida será aquela no índice 1.
##

### Entrada de Amostra 2
```
<
```
### Saída de Amostra 2
```
6
```
Neste exemplo, o usuário clicou uma vez para a esquerda. Após esse clique, a imagem exibida será aquela no índice 6.
##

### Entrada de Amostra 3
```
>>>>>>>>>
```
### Saída de Amostra 3
```
2
```
Neste exemplo, o usuário clicou nove vezes para a direita. Após esses cliques, a imagem exibida será aquela no índice 2.

Observação: Certifique-se de implementar o código necessário para calcular corretamente o índice da imagem a ser exibida, levando em consideração as regras descritas acima.




