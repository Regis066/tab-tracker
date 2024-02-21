import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "sqlite",
    storage: "./tabtracker.sqlite",
  }
);

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

try {
  await sequelize.sync();
  console.log("User model synchronized with database");
} catch (error) {
  console.error("Error synchronizing User model with database:", error);
}

export default User;
