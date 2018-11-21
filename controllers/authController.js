const createError = require('http-errors');

const { AuthRepository } = require('../repository/authRepository');

class AuthController {
  constructor() {
    this.authRepo = new AuthRepository();
  }

  async getUsers() {
    try {
      const users = await this.authRepo.getUsers();
      if (users && users.length === 0) {
        throw new createError(400, `Users does not exist!`);
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserById(user) {
    try {
      return await this.authRepo.getUser(user);
    } catch (error) {
      throw error;
    }
  }

  async createUser(user) {
    try {
      return await this.authRepo.createUser(user);
    } catch (error) {
      throw error;
    }
  }
}

module.exports.AuthController = AuthController;
