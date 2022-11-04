console.log(process.argv);
const fetch = require('node-fetch');

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

console.log('arg1', myArgs[0]);
console.log('arg1', myArgs[1]);


fetch('https://api.publicapis.org/entries')
.then(res => res.json())
.then(json => {
    
    let data = json.entries.sort(function(a, b){
        return a.API.localeCompare(b.API)
    });

    // Put first letter to uppercase
    let search = myArgs[0].charAt(0).toUpperCase() + myArgs[0].slice(1);
    // filter search by the category
    const filteredData = data.filter(element => element.Category === search)
    
    if( myArgs[0] === NaN){
        console.log('No Results')
    } else if(myArgs[1] === NaN){
        console.log(filteredData);
    } else{
        console.log(filteredData.slice(0, myArgs[1]));
    }
});






