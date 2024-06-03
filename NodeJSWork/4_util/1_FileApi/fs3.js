const fs = require("fs/promises")

const content = "안녕하세요~~ Mr.Promise"

async function helloworld(){
    try{
        await fs.writeFile("./hello.txt"); 
        const data = await fs.readFile("./hello.txt", "utf-8")

        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

helloworld();