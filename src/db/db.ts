import Pool from 'pg';
import config from './config';

const db = new Pool.Pool(config);

export default db;