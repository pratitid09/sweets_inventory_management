import { _connection } from '../configurations/databaseConnection';

export const  dbQuery = () => {
    console.log('database query and conn = ', _connection);
}