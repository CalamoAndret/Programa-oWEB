const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Fruta = require('./Fruta');
const Cliente = require('./Cliente');

class Venda extends Model {}

Venda.init({
  // Atributos da tabela Venda
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  dataVenda: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // outros atributos...

  // Relacionamentos
  frutaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Fruta,
      key: 'id'
    }
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Venda'
});

// Associação com Fruta
Venda.belongsTo(Fruta, { foreignKey: 'frutaId' });
// Associação com Cliente
Venda.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Venda;
