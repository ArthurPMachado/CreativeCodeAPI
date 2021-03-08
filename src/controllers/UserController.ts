import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

class UserController {
  async create(request: Request, response: Response) {
    const {
      nome, telefone, email, idade, peso, etnia,
    } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({
      nome, telefone, email, idade, peso, etnia,
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export default UserController;
