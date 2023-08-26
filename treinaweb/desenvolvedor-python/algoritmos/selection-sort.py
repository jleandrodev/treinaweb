numeros = list()

tamanho = int(input("Digite o tamanho do vetor: "))
for i in range(tamanho):
    valor = int(input(f"Digite o valor na posição {i}: "))
    numeros.append(valor)

print("Vetor: ", numeros)


# SELECTION SORT
# 5 | 6 | 4 | 2 | 3

for i in range(tamanho):
    indice_menor = i
    for j in range(int(i + 1), tamanho):
        if numeros[j] < numeros[indice_menor]:
            indice_menor = j
    temp = numeros[indice_menor]
    numeros[indice_menor] = numeros[i]
    numeros[i] = temp
    print("Vetor: ", numeros)
  
# FIM SELECTION SORT
