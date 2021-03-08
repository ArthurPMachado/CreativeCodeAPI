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

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const {
      nome, telefone, email, idade, peso, etnia,
    } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ id });

    if (!userExists) {
      return response.status(404).json({ message: 'User does not exist' });
    }

    userExists.nome = nome;
    userExists.telefone = telefone;
    userExists.email = email;
    userExists.idade = idade;
    userExists.peso = peso;
    userExists.etnia = etnia;

    await userRepository.save(userExists);

    return response.status(200).json(userExists);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getCustomRepository(UserRepository);

    await userRepository.delete(id);

    return response.status(204).json();
  }
}

export default UserController;
