from fabricas import fabrica_conexao
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

fabrica = fabrica_conexao.FabricaConexao()

engine = fabrica.conectar()

Base = declarative_base()

class Cliente(Base):
    __tablename__ = 'cliente'
    idcliente = Column(Integer, primary_key=True)
    nome = Column(String(40), nullable=False)
    idade = Column(Integer, nullable=False)

    pedidos = relationship("Pedido", back_populates='cliente')

    def __repr__(self):
        return "Cliente %s ('%s', '%s')" % (self.idcliente, self.nome, self.idade)


class Pedido(Base):
    __tablename__ = 'pedido'
    id = Column(Integer, primary_key=True)

    cliente_id = Column(Integer, ForeignKey('cliente.idcliente'), nullable=False)

    cliente = relationship('Cliente', back_populates='pedidos')

    def __repr__(self):
        return "Pedido %s " % (self.id)




Base.metadata.create_all(engine)