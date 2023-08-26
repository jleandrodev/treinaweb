numeros = list()

tamanho = int(input("Digite o tamanho do vetor: "))
for i in range(tamanho):
    valor = int(input(f"Digite o vamor na posição {i}: "))
    numeros.append(valor)

print("Vetor: ", numeros)


# BUSCA LINEAR
numero_pesquisar = int(input("Digite o valor a ser pesquisado no vetor: "))
posicao_resultado = -1

for i in range(tamanho):
    if numeros[i] == numero_pesquisar:
        posicao_resultado = i
        break
if posicao_resultado < 0:
    print("O elemento não foi encontrado no vetor!")
else:
    print(f"Elemento encontrado na posição: {posicao_resultado}")    
# FIM BUSCA LINEAR