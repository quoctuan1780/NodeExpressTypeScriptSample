"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
class Post extends sequelize_1.Model {
    static associate(models) {
        // define association here
    }
}
exports.default = Post;
Post.init({
    title: sequelize_1.DataTypes.STRING,
    content: sequelize_1.DataTypes.TEXT,
    imageUrl: sequelize_1.DataTypes.STRING
}, {
    sequelize: index_1.SequelizeInstance,
    modelName: 'Post',
});
