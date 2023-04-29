let fs=require('fs')
// console.log(fs)
let path=require('path')
let newFilePath=path.join(__dirname,"w.txt");
console.log(newFilePath)

fs.writeFileSync(newFilePath,"hello in w.txt")
fs.writeFileSync(newFilePath,"hello again in w.txt")

let content=fs.readFileSync(newFilePath,'utf-8')
console.log("output of read::"+content)

fs.appendFileSync(newFilePath," newly added content")
console.log(fs.readFileSync(newFilePath,'utf-8'))

fs.unlinkSync(newFilePath)