module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('users', {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4()
        },
        name: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        surname: {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false
        },
        age: {
            type: Sequelize.DataTypes.INTEGER,
        },
        phone: {
            type: Sequelize.DataTypes.STRING(12),
            allowNull: false,
            unique: true
        },
        profession: {
            type: Sequelize.DataTypes.STRING(64),
        },
        address: {
            type: Sequelize.DataTypes.STRING
        },
        province: {
            type: Sequelize.DataTypes.STRING
        },
        country: {
            type: Sequelize.DataTypes.STRING
        }
    })
}