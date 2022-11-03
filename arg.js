console.log(process.argv);
const fetch = require('node-fetch');

fetch('https://api.publicapis.org/entries')
    .then(res => res.json([]))
    .then(json => {
        console.log('first user in array');
        // let data = [];
        // data.push(json)
        // json.push(data);
        // data.sort(function(a, b) {
        //     return a.API.localeCompare(b.API);
        //  });
        // data.sort(function(a, b) {
        //     return a.API.localeCompare(b.API);
        // //  });
        // let data = [];
        // for (let i = 0; i < json.length; i++) {
        //     data.push(json[i]) 
            
        // }
        // console.log(data);
        // console.log(data.sort( (a, b) => a.API.localeCompare(b.API))) 
        // console.log(sorted);
        // console.log(json);
    
    });

const myArgs = process.argv.slice(2);

console.log('myArgs: ', myArgs[2]);

// switch (myArgs[1]) {
//     case 'insult':
//       console.log(myArgs[2], 'smells quite badly.');
//       break;
//     case 'compliment':
//       console.log(myArgs[2], 'is really cool.');
//       break;
//     default:
//       console.log('Sorry, that is not something I know how to do.');
//   }
// require express

// const marklogic = require('marklogic');

