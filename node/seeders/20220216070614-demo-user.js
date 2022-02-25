'use strict';

const res = require('express/lib/response');



let users=[]
  // const getFile = async ()=>{
    
    
  // }


let promise = new Promise((resolve,reject)=>{
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('sample_users.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    resolve(results)
  });
  })

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    // return  getFile().then((result)=>{
      
    // })s

     async function seedUsers (){
      let result = await promise
      return queryInterface.bulkInsert('Users',result);
    } 
    return seedUsers()
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
