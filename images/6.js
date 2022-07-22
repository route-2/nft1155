const fs=require("fs");
const args = process.argv.slice(2);
const inputFolder = args[0];
const dir = `${__dirname}\\${inputFolder}`;
const inputFiles = fs.readdirSync(dir).sort()



  console.log(inputFiles)


  for(let i = 0; i < inputFiles.length; i++){
      const file = inputFiles[i]
      fs.renameSync(`${dir}\\${file}`,`${dir}\\${i+1}.${file.split('.')[1]}`) 
  }

 
 
