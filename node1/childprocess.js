let cp=require('child_process');
// console.log(cp)
// cp.execSync("calc")
// const {execFileSync}=require('child_process');
let content=cp.execSync("node abc.js")
console.log("output::"+content)