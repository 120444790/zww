const Sequelize = require('sequelize');

module.exports = function(sequelize, dataTypes) {
  return sequelize.define('Shop', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER
    },
    image: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    storeName: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    cateId: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    price: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    originPrice: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    sales: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    vipPrice: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    productId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    }
  }, {
    sequelize
  });
};
