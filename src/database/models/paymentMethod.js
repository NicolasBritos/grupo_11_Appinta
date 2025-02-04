const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "PaymentMethod",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      commission: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      }
    }, {
        tableName: "PAYMENT_METHOD",
        timestamps: false
    }
  );
  
  model.associate = (models) => {
    model.hasMany(models.Purchase, {
      as: "purchases",
      foreignKey: "payment_method_id"
    })
  }

  return model;
};
