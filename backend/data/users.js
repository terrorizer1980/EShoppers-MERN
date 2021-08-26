import bcrypt from "bcryptjs";
const users = [
  {
    name: "Ahsan",
    email: "ahsan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isActive: true,
  },
  {
    name: "Ahmad",
    email: "ahmad@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bilal",
    email: "bilal@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
