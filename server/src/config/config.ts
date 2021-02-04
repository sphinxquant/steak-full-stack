import convict from 'convict';
import dotenv from 'dotenv';
import path, { join } from 'path';

dotenv.config();
const defaultEnv = 'production';
const env = process.env.NODE_ENV || defaultEnv;
const envPath = join(__dirname, '..', `.env.${env}`);
dotenv.config({ path: envPath });

convict.addFormat({
  name: 'string-array',
  validate: (val) => {},
  coerce: (val) => val.split(',').map((item: string) => item.trim()),
});

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ssl: {
    key: {
      doc: 'Location of private key',
      format: '*',
      default: '/etc/letsencrypt/live/steakcoins.com/privkey.pem',
      env: 'SSL_KEY',
    },
    cert: {
      doc: 'Location of ssl full chain',
      format: '*',
      default: '/etc/letsencrypt/live/steakcoins.com/fullchain.pem',
      env: 'SSL_FULLCHAIN',
    },
    ca: {
      doc: 'Location of ssl chain pem',
      format: '*',
      default: '/etc/letsencrypt/live/steakcoins.com/chain.pem',
      env: 'SSL_CHAIN',
    },
  },
  server: {
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 8000,
      env: 'PORT',
      arg: 'port',
    },
  },
  auth: {
    jwtSecret: {
      doc: 'Super secret tech',
      format: '*',
      default: 'VerySecureSecrete',
      env: 'JWT_SECRET',
    },
  },
  twitter: {
    consumerKey: {
      doc: 'Twitter API Key',
      format: '*',
      default: '',
      env: 'TWITTER_API_KEY',
    },
    consumerSecret: {
      doc: 'Twitter API secret key',
      format: '*',
      default: '',
      env: 'TWITTER_API_SECRET',
    },
    callbackURL: {
      doc: 'call back endpoint for twitter',
      format: '*',
      default: 'http://127.0.0.1:8000/auth/twitter/callback',
      env: 'TWITTER_CALLBACK_URL',
    },
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'MYSQL_HOST',
    },
    port: {
      doc: 'Database port',
      format: Number,
      default: 3306,
      env: 'MYSQL_PORT',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'steakcoin',
      env: 'MYSQL_DATABASE',
    },
    user: {
      doc: 'Database username',
      format: String,
      default: 'maria',
      env: 'MYSQL_USER',
    },
    userpass: {
      doc: 'Dababase password',
      format: String,
      default: 'heytheredelilah',
      env: 'MYSQL_PASSWORD',
    },
    migrationPath: {
      doc: 'Path to migrations',
      format: String,
      default: path.join(__dirname, '../../database/migrations'),
      env: 'DB_MIGRATIONS',
    },
    seedPath: {
      doc: 'Path to db seed',
      format: String,
      default: path.join(__dirname, '../../database/seed'),
      env: 'DB_SEED',
    },
  },
});

config.validate({ allowed: 'strict' });

export default config.getProperties();
