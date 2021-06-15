const { Pool } = require('pg');

const PG_URI = '';

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
