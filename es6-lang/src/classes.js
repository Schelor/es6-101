console.log(`
      ************** Classes examples **************

                 === Class Definition ===
                      `);

class Shape {
    
    constructor(id, x, y) {
        this.id = id;
 
    }
    move(x, y) {
       this.x = x;
       this.y = y;
    }
    getPos() {
        return {
            x: this.x,
            y: this.y
        }
    }
}    

let shape0 = new Shape();
console.log("shape0:", JSON.stringify(shape0))

let shape = new Shape(1, 100, 200);

console.log("shape.getPos:", JSON.stringify(shape.getPos()));
shape.move(200, 300);
console.log("shape.getPos:", JSON.stringify(shape.getPos()));

    console.log(`
                === Class Inheritance ===
              `);

  class Rectangle extends Shape {
    constructor(id, x, y, w, h) {
        super(id, x, y);
        this.w = w;
        this.h = h;
    }
    getSize() {
        return {
            width: this.w,
            height: this.h
        }
    }
  }  
  
  let rectangle = new Rectangle(0, 1, 2, 3, 4);
  console.log(`Regtangle Size:`, rectangle.getSize());