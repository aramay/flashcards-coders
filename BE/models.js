const { Pool } = require('pg');

const PG_URI = 'postgres://krioahmi:JSTEli-e0-QtNy0ScDinBQuYprv-5Y5X@kashin.db.elephantsql.com/krioahmi';

// create a connection pool
const pool = new Pool({
  connectionString: PG_URI
});

// export and object : query
// query is a function that returns the invocation of 
// pool.query() after logging the query
// export this object : query 

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query ', text);
    console.log('executed params ', params);
    return pool.query(text, params, callback);
  }
};
