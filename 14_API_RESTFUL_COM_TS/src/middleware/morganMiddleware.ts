import morgan, { StreamOptions } from 'morgan';
import config from 'config';
import Logger from '../../config/logger';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

// useful to reduce the computer performance
const skip = () => {
  const env = config.get<string>('env') || 'development';
  return env !== 'development';
};

// will know when to print msg or not based on skip response
const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', { stream, skip });

export default morganMiddleware;
