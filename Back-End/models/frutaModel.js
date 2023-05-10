const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Origem = require('./Origem');
const Produtor = require('./Produtor');
const Loja = require('./Loja');

class Fruta extends Model {}

Fruta.init({
  // Atributos da tabela Fruta
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  // outros atributos...

  // Relacionamentos
  origemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Origem,
      key: 'id'
    }
  },
  produtorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produtor,
      key: 'id'
    }
  },
  lojaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Loja,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Fruta'
});

// Associação com Origem
Fruta.belongsTo(Origem, { foreignKey: 'origemId' });
// Associação com Produtor
Fruta.belongsTo(Produtor, { foreignKey: 'produtorId' });
// Associação com Loja
Fruta.belongsTo(Loja, { foreignKey: 'lojaId' });

module.exports = Fruta;
