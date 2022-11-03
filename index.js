// require express

const inquirer = require('inquirer');
const fetch = require('node-fetch');
// const marklogic = require('marklogic');

const questions = [
    {
        type: 'input',
        name: 'category',
        message: 'What category would you like to see?',
    },
    {
        type: 'number',
        name: 'number',
        message: 'number of results you want to see?',

    },
]

inquirer.prompt(questions).then(answers => {
    console.log(`hi ${answers.name} and ${answers.number}`)
});

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
        console.log(json);
    
    });

