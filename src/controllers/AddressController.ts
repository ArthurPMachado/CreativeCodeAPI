import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AddressRepository from '../repositories/AddressRepository';

class AddressController {
  async create(request: Request, response: Response) {
    const {
      nome_endereco, numero, complemento, cep, cidade, estado,
    } = request.body;

    const addressRepository = getCustomRepository(AddressRepository);

    const address = addressRepository.create({
      nome_endereco, numero, complemento, cep, cidade, estado,
    });

    await addressRepository.save(address);

    return response.json(address);
  }
}

export default AddressController;
