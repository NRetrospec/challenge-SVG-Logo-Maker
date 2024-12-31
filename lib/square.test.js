const Square = require("./square")

describe("Square", ()=>{


  describe ("textColor",()=>{
    it("test textColor", ()=>{
      const square = new Square("CIR", "purple", "black")
      expect(square.textColor).toEqual("purple")
    })
  })

  describe ("shapeColor",()=>{
    it("test shapeColor", ()=>{
      const square = new Square("CIR", "purple", "black")
      expect(square.shapeColor).toEqual("black")
    })
  })

  describe("render", ()=>{
    it("test square svg logo", ()=>{
      const square = new Square("CIR", "purple", "black")
      expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200"  fill="${square.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`)
    })
  })
})