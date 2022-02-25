// const Fs = require('fs');
// const CsvReadableStream = require('csv-reader');
// const user = require('./models/user');

// let inputStream = Fs.createReadStream('sample_users.csv', 'utf8');
// let users=[]
// inputStream
// 	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
// 	.on('data', function (row) {
//         users.push(row)
// 	})
// 	.on('end', function () {
// 	    console.log('No more rows!',users);

// 	});