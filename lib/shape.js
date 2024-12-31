class Shape{
  constructor(text,textColor,shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;

  }
 render(){
  throw new Error("Child is required to use its own render()")
 }
}

module.exports=Shape