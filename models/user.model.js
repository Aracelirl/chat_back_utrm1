import {Model , DataTypes} from 'sequelize';
import {database} from "../config/database.js";

export class UserModel extends Model{}

UserModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true

    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    sequelize:database,
    tableName: 'users',
    timestamps: false,
},)
