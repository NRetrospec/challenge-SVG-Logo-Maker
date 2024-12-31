const Shape = require("./shape")

describe("Shape", ()=>{


  describe ("textColor",()=>{
    it("test textColor", ()=>{
      const shape = new Shape("CIR", "purple", "black")
      expect(shape.textColor).toEqual("purple")
    })
  })

  describe ("shapeColor",()=>{
    it("test shapeColor", ()=>{
      const shape = new Shape("CIR", "purple", "black")
      expect(shape.shapeColor).toEqual("black")
    })
  })

  describe("render", ()=>{
    it("test shape svg logo", ()=>{
      const shape = new Shape("CIR", "purple", "black");
      expect(()=>shape.render()).toThrow(new Error("Child is required to use its own render()"));
    })
  })
})