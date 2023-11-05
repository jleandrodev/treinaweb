numeros = list()

tamanho = int(input("Digite o tamanho do vetor: "))
for i in range(tamanho):
    valor = int(input(f"Digite o vamor na posição {i}: "))
    numeros.append(valor)

print("Vetor: ", numeros)

# SELECTION SORT
for i in range(tamanho):
    indice_menor = i
    for j in range(int(i + 1), tamanho):
        if numeros[j] < numeros[indice_menor]:
            indice_menor = j
    temp = numeros[indice_menor]
    numeros[indice_menor] = numeros[i]
    numeros[i] = temp
    print(f"Ordenação do vetor na iteração {i}: ", numeros)

# FIM SEÇLECTION SORT

# BUSCA BINÁRIA
resultado = -1
inicio = 0
fim = tamanho - 1
meio = 0
alvo = int(input("Digite o elemento a ser encontrado: "))

while inicio <= fim:
    meio = int((inicio + fim) / 2)
    if (numeros[meio] < alvo):
        inicio = meio + 1
    elif (numeros[meio] > alvo):
        fim = meio -1
    else:
        resultado = meio
        break
if resultado < 0:
    print("O elemento não foi encontrado")
else:
    print(f"O elemento {alvo} foi encontrado na posição: {resultado}")
# FIM BUSCA BINÁRIA