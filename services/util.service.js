import { rejects } from 'assert';
import fs from 'fs'
import { resolve } from 'path';


export const utilService={
    log,
    sumFromFile,
}



function log(text){
    console.log(text);
}

function sumFromFile(path){
    // console.log(path);
    return new Promise((resolve,rejects)=>{
        var nums = _readFile(path)
        const sepNums = nums.split('\r\n')

        const sum = sepNums.reduce((sum,num)=> {return parseInt(num) + sum},0)
        // var sum = 0
        // sepNums.forEach(num => {
            // sum += +num
        // });
        resolve(sum)
    })
     
}




function _readFile(path){
    const file = fs.readFileSync(path,'utf-8',(err, contents) => {
		if (err) return console.log('Cannot read file')
		return contents
        console.log(contents)
	})
    return file
}

