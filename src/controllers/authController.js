const authService = require('../services/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password} = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async validateToken(req, res) {
    try {
      const { token } = req.body;
      const result = await authService.validateToken(token);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();