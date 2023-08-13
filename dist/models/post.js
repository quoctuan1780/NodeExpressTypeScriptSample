"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Post extends sequelize_1.Model {
    static associate(models) {
        // define association here
    }
}
exports.default = Post;
Post.init({
    title: sequelize_1.DataTypes.STRING,
    content: sequelize_1.DataTypes.STRING,
    imageUrl: sequelize_1.DataTypes.STRING
}, {
    sequelize: index_1.default.sequelize,
    modelName: 'Post',
});
