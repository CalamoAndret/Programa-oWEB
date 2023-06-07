const User = require('../models/User');

class UserController {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username, password } });

      if (user) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new UserController();
