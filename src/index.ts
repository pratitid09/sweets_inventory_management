import { connectToDatabase } from "./configurations/databaseConnection";
import { dbQuery } from "./models";
console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';


// at the time of app start this can be called.
// all files needing to connect to db can then just call the connection object from dbConnection
connectToDatabase();
dbQuery();

// TODO: more examples
