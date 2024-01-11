import { Model, DataTypes } from 'sequelize';
import db from './index';
import User from './user';

interface PostAttributes {
  id: number;
  description: string;
}

class Post extends Model<PostAttributes> {
  public id!: number;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'posts',
    sequelize: db.sequelize,
  }
);

Post.belongsTo(User, {
  targetKey: 'id',
});

export default Post;
