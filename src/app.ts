import createError from 'http-errors';
import { createServer } from 'http';
import express, {Request, Response} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {PostRouter} from './routes/index';
var debug = require('debug')('nodesample:server');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const options = {
  type: 'application/octet-stream',
};
app.use(bodyParser.raw(options));
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsConfig = cors({origin: '*'});

app.use(corsConfig);

app.options('*', corsConfig);
app.get('*', corsConfig);
app.post('*', corsConfig);
app.put('*', corsConfig);
app.patch('*', corsConfig);
app.delete('*', corsConfig);

app.use('/images', express.static(path.join(__dirname, '/../public/images')));
app.use('/', PostRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: any) {
  res.status(404).json({message: "Not found"})
  next();
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

dotenv.config();

const port = process.env.PORT || 3001
var server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr: any = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

export = app;