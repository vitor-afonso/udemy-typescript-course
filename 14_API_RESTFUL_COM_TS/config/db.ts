import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

const connect = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    Logger.info('Successfully connected to MongoDB!');
  } catch (e) {
    Logger.error('Not possible to connect to database!');
    Logger.error(`Error: ${e}`);
    process.exit(1); // If there an error when connecting to db it will stop the server
  }
};

export default connect;
