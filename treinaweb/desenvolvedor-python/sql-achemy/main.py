import cliente, cliente_repositorio

cliente = cliente.Cliente("Arnildo", 48)

cliente_repositorio.ClienteRepositorio.listar_clientes()
cliente_repositorio.ClienteRepositorio.inserir_cliente(cliente)
