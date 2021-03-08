import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import { sign } from './token';

/* eslint-disable prefer-promise-reject-errors */
const authFailed = (email: string) => Promise.reject({
  status: 401,
  code: 'UNAUTHENTICATED',
  message: `Failed to authenticate user ${email}`,
});

const authenticate = async (email: string) => {
  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.find({ email });
  if (!user) {
    return authFailed(email);
  }

  return sign(user);
};

export { authenticate };
