import app from '@internal/server';
import path from 'path';


app(path.join(__dirname, 'client/build'));