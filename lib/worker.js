
/**
 * Worker process.
 */

process.on('message', function(msg){
  if (!msg.partialData) return process.send({ status: 'finished', partialResults: {} });
  
  var map = new Function("return " + msg.map)();
  var partialResults = map(msg.partialData);
  
  process.send({ status: 'finished', partialResults: partialResults });
  process.exit(0);
});