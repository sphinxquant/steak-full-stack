import knex from 'knex';
import { SHARE_ENV } from 'worker_threads';

import config from '../config';
import knexfile from './knexfile';

// const env = <string>config.env;

const connection = knex(knexfile.development);

export default connection;
