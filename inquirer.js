// require express

const inquirer = require('inquirer');
const fetch = require('node-fetch');

// import inquirer from 'inquirer';

// const marklogic = require('marklogic');

inquirer
    .prompt([
        {
            type: 'string',
            name: 'confirm',
            message: 'Show all data (t/f)?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What category would you like to see?',
            when: (answers) => answers.confirm === 'f',
        },
        {
            type: 'number',
            name: 'number',
            message: 'number of results you want to see?',
            when: (answers) => answers.confirm === 'f',
    
        },

    ])
    .then((answers) => {
        if(answers.confirm === 't'){(
            fetch('https://api.publicapis.org/entries')
            .then(res => res.json())
            .then(json => {
                let count = json.count;
                let data = json.entries.sort(function(a, b){
                    return a.API.localeCompare(b.API)
                });
                console.log('all data', count, data);
                // return;
            }))
        } else{
            fetch('https://api.publicapis.org/entries')
            .then(res => res.json())
            .then(json => {
                
                let data = json.entries.sort(function(a, b){
                    return a.API.localeCompare(b.API)
                });

                // Put first letter to uppercase
                let search = answers.name.charAt(0).toUpperCase() + answers.name.slice(1);
                // filter search by the category
                const filteredData = data.filter(element => element.Category === search)
                
                if( answers.number === NaN){
                    console.log(filteredData)
                } else{
                    console.log(filteredData.slice(0, answers.number));
                }
                // console.log('all data', json);
                 // data.sort(function(a, b) {
        //     return a.API.localeCompare(b.API);
            
            }) 
        }   
    })
    // .prompt([
       