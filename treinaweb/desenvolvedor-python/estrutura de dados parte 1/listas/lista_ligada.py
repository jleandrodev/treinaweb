from .no import No

class ListaLigada():
    def __init__(self):
        self.__primeiro_no = None
        self.__ultimo_no = None
        self.__tamanho = 0

    def inserir(self, elemento):
        novo_no = No(elemento)

        if self.esta_vazia():
            self.__primeiro_no = novo_no
            self.__ultimo_no = novo_no
        else:
            self.__ultimo_no.proximo = novo_no
            self.__ultimo_no = novo_no
        self.__tamanho += 1 
    
    def esta_vazia(self):
        return self.__tamanho == 0
    
    def __str__(self):
        temp = self.__primeiro_no
        elementos = ""
        while(temp):
            elementos = f"{elementos} {temp.elemento}"
            temp = temp.proximo
        return elementos

    def recuperar_no(self, posicao):
        for i in range(posicao + 1):
            if i == 0:
                resultado = self.__primeiro_no
            else:
                resultado = resultado.proximo
        return resultado
    
    def recuperar_elemento_no(self, posicao):
        no = self.recuperar_no(posicao)
        if no != None:
            return no.elemento
        return None