from entidades import cliente
from repositorios import cliente_repositorio
from fabricas import fabrica_conexao

while True:
    print(30 * '-', ' MENU ', 30 * '-')
    print('1 - Cliente')
    print('2 - Produtos')
    print('3 - Pedidos')
    print('0 - Sair')
    print(68 * '-')

    opcao = input("Digite a opção desejada >>> ")

    if opcao == '1':
        while True:
            print(26 * '-', ' MENU CLIENTE ', 26 * '-')
            print('1 - Inserir Cliente')
            print('2 - Editar Cliente')
            print('3 - Remover Cliente')
            print('4 - Listar Clientes')
            print('0 - Voltar')
            print(68 * '-') 

            opcao_cliente = input("Digite a opção desejada >>> ")
            
            if opcao_cliente == '1':
                fabrica = fabrica_conexao.FabricaConexao()
                sessao = fabrica.criar_sessao()

                try:
                    nome_cliente = input("Digite o nome do cliente: ")
                    idade_cliente = int(input("Digite a idade do cliente: "))

                    novo_cliente = cliente.Cliente(nome_cliente, idade_cliente)
                    repositorio = cliente_repositorio.ClienteRepositorio()

                    repositorio.inserir_cliente(novo_cliente, sessao)
                    sessao.commit()
                except:
                    sessao.rollback()
                finally:
                    sessao.close()
            elif opcao_cliente == '2':
                fabrica = fabrica_conexao.FabricaConexao()

                sessao = fabrica.criar_sessao()

                try:
                    id_cliente = input("Digite o id do cliente: ")
                    nome_cliente = input("Digite o nome do cliente: ")
                    idade_cliente = int(input("Digite a idade do cliente: "))

                    novo_cliente = cliente.Cliente(nome_cliente, idade_cliente)
                    repositorio = cliente_repositorio.ClienteRepositorio()

                    repositorio.editar_cliente(id_cliente, novo_cliente, sessao)

                    sessao.commit()
                except:
                    sessao.rollback()
                finally:
                    sessao.close()

            elif opcao_cliente == '3':
                fabrica = fabrica_conexao.FabricaConexao()

                sessao = fabrica.criar_sessao()

                try:
                    id_cliente = int(input("Digite o id do cliente que deseja remover >>> "))
                    repositorio = cliente_repositorio.ClienteRepositorio()
                    repositorio.remover_cliente(id_cliente, sessao)

                    sessao.commit()
                except:
                    sessao.rollback()
                finally:
                    sessao.close()

            elif opcao_cliente == '4':
                fabrica = fabrica_conexao.FabricaConexao()

                sessao = fabrica.criar_sessao()

                try:
                    repositorio = cliente_repositorio.ClienteRepositorio()
                    clientes = repositorio.listar_clientes(sessao)
                    for cliente in clientes:
                        print(cliente)
                except:
                    sessao.rollback()
                    raise
                finally:
                    sessao.close()

            elif opcao_cliente == '0':
                break
            else:
                print("Opção inválida, tente novamente")

    elif opcao == '2':
        continue
    elif opcao == '3':
        continue
    elif opcao == '0':
        break
    else:
        print("Opção inválida, tente novamente")
    