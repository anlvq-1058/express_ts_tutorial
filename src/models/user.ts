import { Model, DataTypes } from 'sequelize';
import db from './index';
import Post from './post';

interface UserAttributes {
  id: number,
  firstName: string,
  lastName: string,
  email : string,
};

class User extends Model<UserAttributes> {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: db.sequelize,
    timestamps: false, // this bit is important
  }
);

User.hasMany(Post, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'posts'
});

export default User;
