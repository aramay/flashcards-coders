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

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// // callback - checkout a client
// pool.connect((err, client, done) => {
//   if (err) throw err;
//   client.query('LISTEN addedrecord');

//   client.on('notification', function(data){
//     console.log('inside notification ');
//     console.log(data);
//   });
// });

/**IGNORE BELOW */
// const client = new Client();

// var query = client.query("LISTEN addedrecord");
// query.then(res => console.log("res ", res));

// pool.connect(function(err, client) {
//   if(err) {
//     console.log(`Error ${err}`);
//   }
//   client.on('notification', function(msg) {
//     console.log(`mesage ${msg}`);
//   });
//   var query = pool.query("LISTEN addedrecord");
// });