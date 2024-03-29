from fabricas import fabrica_conexao
from queries import clientes_query
from dominios.db import Cliente

fabrica = fabrica_conexao.FabricaConexao()

class ClienteRepositorio():
    def listar_clientes(self, sessao):
        query_cliente = clientes_query.ClienteQuery()
        clientes = query_cliente.listar_clientes(sessao)

        return clientes
    
    def listar_cliente_id(self, id_cliente, sessao):
        query_cliente = clientes_query.ClienteQuery()
        cliente = query_cliente.listar_cliente_id(id_cliente, sessao)

        return cliente
    
    def listar_cliente_nome(self, nome, sessao):
         query_cliente = clientes_query.ClienteQuery()
         clientes = query_cliente.listar_cliente_nome(nome, sessao)

         return clientes

    def inserir_cliente(self, cliente, sessao):
            query_cliente = clientes_query.ClienteQuery()
            novo_cliente = Cliente(nome=cliente.nome, idade=cliente.idade)
            query_cliente.inserir_cliente(novo_cliente, sessao)

    def editar_cliente(self, id_cliente, cliente, sessao):
        query_cliente = clientes_query.ClienteQuery()
        query_cliente.editar_cliente(id_cliente, cliente, sessao)

    def remover_cliente(self, id_cliente, sessao):
        query_cliente = clientes_query.ClienteQuery()
        query_cliente.remover_cliente(id_cliente, sessao)

    def listar_cliente_nome_ordenado(self, nome, sessao):
         query_cliente = clientes_query.ClienteQuery()
         clientes = query_cliente.listar_cliente_nome_ordenado(nome, sessao)

         return clientes