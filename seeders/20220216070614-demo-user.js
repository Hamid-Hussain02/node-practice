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
    console.log(results);
    resolve(results)
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
  })

module.exports = {
  
  up: (queryInterface, Sequelize) => {
    // return  getFile().then((result)=>{
      
    // })

     async function seedUsers (){
      let result = await promise

      console.log("users", users,result)
      return queryInterface.bulkInsert('Users',result);
    } 
    return seedUsers()
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
