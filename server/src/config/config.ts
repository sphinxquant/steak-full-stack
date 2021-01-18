import convict from 'convict';
import path from 'path';

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
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
      default: 'sponsored',
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

// config.get('env');

config.validate({ allowed: 'strict' });

export default config.getProperties();
