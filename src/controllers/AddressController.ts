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

  async listAll(request: Request, response: Response) {
    const addressRepository = getCustomRepository(AddressRepository);

    const listAddresses = await addressRepository.find();

    return response.json(listAddresses);
  }

  async listOne(request: Request, response: Response) {
    const { id } = request.params;

    const addressRepository = getCustomRepository(AddressRepository);

    const listAddress = await addressRepository.find({ id });

    return response.json(listAddress);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const {
      nome_endereco, numero, complemento, cep, cidade, estado,
    } = request.body;

    const addressRepository = getCustomRepository(AddressRepository);

    const addressExists = await addressRepository.findOne({ id });

    if (!addressExists) {
      return response.status(404).json({ message: 'Address does not exist' });
    }

    addressExists.nome_endereco = nome_endereco;
    addressExists.numero = numero;
    addressExists.complemento = complemento;
    addressExists.cep = cep;
    addressExists.cidade = cidade;
    addressExists.estado = estado;

    await addressRepository.save(addressExists);

    return response.status(200).json(addressExists);
  }
}

export default AddressController;
