import bcrypt from 'bcryptjs';

const name = 'User';
const tableName = 'users';

const SALT_ROUNDS = 10;
const hashPassword = (password: String): void =>
  bcrypt.hash(password, SALT_ROUNDS);
const verifyPassword = (password: String, hash: String): Boolean =>
  bcrypt.compare(password, hash);
