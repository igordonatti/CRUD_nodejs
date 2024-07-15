const prisma = require('../config/db');
const bcrypt = require('bcrypt');

class UserService {
    async createUser(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      ...user,
      password: undefined
    };
  }

  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    return {
      ...user,
      password: undefined
    };
  }

  async getAllUsers() {
    const users = await prisma.user.findMany();
  
    return users;
  }

  async updateUser(id, data) {
    data.password =  data.password ? await bcrypt.hash(data.password, 10) : undefined;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        ...data,
      }
    });

    return {
      ...user,
      password: undefined
    };
  }

  async deleteUser(id) {
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });

    return {
      ...user,
      password: undefined
    };
  }
}

module.exports = new UserService();