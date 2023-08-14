import {Model, DataTypes} from 'sequelize';
import {SequelizeInstance} from './index';

interface PostAttributes {
  title: string,
  content: string,
  imageUrl: string
}

  
export default class Post extends Model<PostAttributes> implements PostAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    title!: string;
    content!: string;
    imageUrl!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING
  }, {
    sequelize: SequelizeInstance,
    modelName: 'Post',
  });
