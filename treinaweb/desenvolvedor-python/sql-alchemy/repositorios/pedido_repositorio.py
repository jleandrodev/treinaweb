

from dominios.db import Pedido
from queries.pedido_query import PedidoQuery
from repositorios.cliente_repositorio import ClienteRepositorio


class PedidoRepositorio():
    def inserir_pedido(self, id_cliente, sessao):
        repositorio_cliente = ClienteRepositorio()
        cliente = repositorio_cliente.listar_cliente_id(id_cliente, sessao)
        query_pedido = PedidoQuery()
        novo_pedido = Pedido(cliente=cliente)

        query_pedido.inserir_pedido(novo_pedido, sessao)

