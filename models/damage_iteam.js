const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DamageItemModel = sequelize.define('DamageItem', {
    id: {
        type: DataTypes.INTEGER(3),
        autoincrement: true,
        primaryKey: true
    },
    itemId: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    openDate: {
        type: DataTypes.timestamps,
        allowNull: false,
    },
    closeDate: {
        type: DataTypes.timestamps,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.ENUM('pending', 'repair', 'close'),
        allowNull: false
    }
}, {
    dbsequelize,
    timestamps: false,
    tableName: 'Category',
    timestamps: false,

});
module.exports = CategoryModel;