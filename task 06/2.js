class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Creating an instance of the Circle class
  const circle = new Circle(5);
  console.log("Radius:", circle.getRadius());
  console.log("Area:", circle.getArea());
  console.log("Circumference:", circle.getCircumference());