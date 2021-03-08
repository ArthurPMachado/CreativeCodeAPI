import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../repositories/AddressRepository';
import UserRepository from '../repositories/UserRepository';

class AddressController {
  async create(request: Request, response: Response) {
    const { email } = request.params;
    const {
      nome_endereco, numero, complemento, cep, cidade, estado,
    } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const addressRepository = getCustomRepository(AddressRepository);

    const address = addressRepository.create({
      nome_endereco, user_id: user.id, numero, complemento, cep, cidade, estado,
    });

    await addressRepository.save(address);

    return response.json(address);
  }
}

export default AddressController;
