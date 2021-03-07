import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const {
      nome, telefone, email, idade, peso, etnia,
    } = request.body;

    const userRepository = getRepository(User);

    const user = userRepository.create({
      nome, telefone, email, idade, peso, etnia,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export default UserController;
