const { validate } = require('@babel/types')
const inquirer = require('inquirer')

inquirer.prompt([{
  type: "input",
  message: "Enter 3 Characters text:", 
  validate:(text)=>text.length==3 ? true:false,
  name: "text"
},{
  type: "input",
  message: "Enter text color:",
  name: "textColor"
},{
  type: "input",
  message: "Enter shape color:",
  name: "shapeColor"
},{
  type: "list",
  message: "choose a shape:",
  name: "shape",
  choices: ["circle", "square", "triangle"]
}])
.then(res=>{
  if(res.shape==="circle"){

  }
  else if(res.shape==="triangle"){

  }
  else if(res.shape==="square"){
    
  }
})