import knex from '../db';

const getEntities = (req: any, res: any, next: any) => {
  knex
    .select('*')
    .from('Entity')
    .then((users) =>
      res.json({
        ok: true,
        message: 'Users found',
        users,
      })
    )
    .catch(next);
};

export { getEntities };
