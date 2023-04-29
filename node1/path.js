let p=require('path')
// console.log(p)
console.log(p.extname("/home/sem6/a.js"))
console.log(p.basename("/home/sem6/a.js"))
console.log(p.dirname("/home/sem6/a.js"))

console.log(__filename)

let dirpath= __dirname;
console.log(dirpath);

let newFilePath=p.join(dirpath,"os.js");
console.log(newFilePath);