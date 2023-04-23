from usuario import Usuario

continuar = 1
lista_usuarios = []

while continuar != 0:
    nome = input('Digite o nome: ')
    sobrenome = input('Digite o sobrenome: ')
    idade = int(input('Digite a idade: '))

    if idade == 0:
        break
    
    usuario = Usuario(nome, idade, sobrenome)
    lista_usuarios.append(usuario)
    print("Usuário criado!")

    continuar = int(input("Desesa continuar: [1] continuar | [0] Sair: "))
else:
    print("Cadastro finalizado!")
    print("Veja a lista de usuários: ")
    print("=" * 20)
    for user in lista_usuarios:
        print(user.nome, user.sobrenome)