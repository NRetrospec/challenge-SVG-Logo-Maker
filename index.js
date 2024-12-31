const { validate } = require('@babel/types')
const inquirer = require('inquirer')
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

const fs=require("fs")

inquirer.prompt([{
  type: "input",
  message: "Enter at least 3 Characters text:", 
  validate:(text)=>text.length <=3 ? true:false,
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
  let content =""
  let filename =""
  if(res.shape==="circle"){
      const circle = new Circle(res.text,res.textColor,res.shapeColor)
      content=circle.render()
      filename="./examples/circle.svg"
  }
  else if(res.shape==="triangle"){
    const triangle = new Triangle(res.text,res.textColor,res.shapeColor)
    content=triangle.render()
    filename="./examples/triangle.svg"

  }
  else if(res.shape==="square"){
    const square = new Square(res.text,res.textColor,res.shapeColor)
    content=square.render()
    filename="./examples/square.svg"

  }

  fs.writeFile(filename,content,(err)=>err ?console.log(err): console.log("success"))
})