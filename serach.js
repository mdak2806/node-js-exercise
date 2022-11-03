const marklogic = require('marklogic');
const my = require('./my-connection.js');
const db = marklogic.createDatabaseClient(my.connInfo);
const qb = marklogic.queryBuilder;

db.documents.query( qb.where(
  qb.byExample( {
    location: {$word : 'oslo'},
    reputation: {$gt : 400},
    $filtered: true
  }))
).result( function(results) {
  console.log(JSON.stringify(results, null, 2));
}, function(error) {
  console.log(JSON.stringify(error, null, 2));
});