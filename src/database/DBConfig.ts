import { set, connect } from 'mongoose';

export class DB {
  private MONGODB_URI: string;

  constructor() {
    this.MONGODB_URI = process.env.MONGODB_URI;

  }

  public connection = async () => {
    set("strictQuery", false);
    try {
       await connect(this.MONGODB_URI,{autoIndex: false});
      console.log('database connected!');
    } catch (error) {
      console.error(error);
    }
  };
}



