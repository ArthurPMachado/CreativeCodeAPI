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

  async listAll(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);

    const listUsers = await userRepository.find();

    return response.json(listUsers);
  }

  async listOne(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getCustomRepository(UserRepository);

    const listUser = await userRepository.find({ id });

    return response.json(listUser);
  }
}

export default UserController;
