import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Address from '../models/Address';

class AddressController {
  async create(request: Request, response: Response) {
    const {
      nome_endereco, numero, complemento, cep, cidade, estado,
    } = request.body;

    const addressRepository = getRepository(Address);

    const address = addressRepository.create({
      nome_endereco, numero, complemento, cep, cidade, estado,
    });

    await addressRepository.save(address);

    return response.json(address);
  }
}

export default AddressController;
