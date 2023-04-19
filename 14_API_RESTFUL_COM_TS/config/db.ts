import mongoose from 'mongoose';
import config from 'config';

const connect = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('Successfully connected to MongoDB!');
  } catch (e) {
    console.log('Not possible to connect to database!');
    console.log(`Error: ${e}`);
  }
};

export default connect;
