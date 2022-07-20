import Pool from 'pg';
import config from './config';

async function query(queryText: string): Promise<any[]> {
    const pool = new Pool.Pool(config);
    pool.query(queryText, (error, results) => {
        if (error) {
            throw error;
        }
        return results.rows ? results.rows : [];
    });
    
    return [];
}

export default query;