/* eslint-disable no-multi-assign */
import * as jwt from 'jsonwebtoken';

const sign = (payload: string | object | Buffer) => jwt.sign(payload, 'creativecode');

const verify = (token: string) => new Promise((resolve, reject) => jwt.verify(
  token,
  'creativecode',
  (error: any, data: unknown) => (error ? reject(error) : resolve(data)),
));

export { sign, verify };
