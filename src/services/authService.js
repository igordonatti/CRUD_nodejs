const prisma = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  async login(email, password) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if(!user){
      throw new Error('Invalid email or password');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: '1h'});

    return { token, user:{ ...user, password: undefined } };
  }

  async validateToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new Error('Invalid Token');
    }
  }
}

module.exports = new AuthService();