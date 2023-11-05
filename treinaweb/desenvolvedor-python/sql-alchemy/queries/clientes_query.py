from dominios.db import Cliente

class ClienteQuery():
    def inserir_cliente(self, cliente, sessao):
        sessao.add(cliente)

    def editar_cliente(self, id_cliente, cliente, sessao):
        client = self.listar_cliente_id(id_cliente, sessao)
        client.nome = cliente.nome
        client.idade = cliente.idade
    
    def listar_cliente_nome(self, nome, sessao):
        clientes = sessao.query(Cliente).filter(Cliente.nome == nome).all()

        return clientes

    def remover_cliente(self, id_cliente, sessao):
        cliente = self.listar_cliente_id(id_cliente, sessao)
        sessao.delete(cliente)
    
    def listar_clientes(self, sessao):
        clientes = sessao.query(Cliente).all()

        return clientes
    
    def listar_cliente_id(self,id_cliente, sessao):
        cliente = sessao.query(Cliente).filter(Cliente.idcliente == id_cliente).first()
        return cliente
    
    def listar_cliente_nome_ordenado(self, nome, sessao):
        clientes = sessao.query(Cliente).filter(Cliente.nome == nome).order_by(Cliente.idade).all()

        return clientes
