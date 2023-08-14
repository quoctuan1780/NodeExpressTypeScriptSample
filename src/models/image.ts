import { Model, DataTypes } from 'sequelize';
import {SequelizeInstance} from './index';
//const modules = require('./index');

interface ImageAttributes {
  url: string,
  originalName: string
}


export default class Image extends Model<ImageAttributes> implements ImageAttributes{
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  url!: string;
  originalName!: string;
  static associate(models: any) {
    // define association here
  }
}
Image.init({
  url: DataTypes.STRING,
  originalName: DataTypes.STRING
}, {
  sequelize: SequelizeInstance,
  modelName: 'Image',
});
