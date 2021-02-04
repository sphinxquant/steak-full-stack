import * as express from 'express';

export const isLoggedIn = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  if (request.user) {
    next();
  } else {
    response.status(401).send('Not Logged In');
  }
};
