import config from '../config';

export default {
  development: {
    client: 'mysql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.userpass,
      database: config.db.name,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: config.db.migrationPath,
    },
    seeds: {
      directory: config.db.seedPath,
    },
  },
};
