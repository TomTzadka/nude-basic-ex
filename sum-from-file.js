import { utilService } from "./services/util.service.js";



utilService.sumFromFile('data/nums.txt')
.then(sum => console.log('Sum:', sum))
.catch(err => console.log('Cannot sum:', err))