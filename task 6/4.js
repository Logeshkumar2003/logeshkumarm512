class UberPriceCalculator {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculatePrice() {
      const baseFare = 2.00;
      const distanceRate = 0.10;
      const timeRate = 0.05;
  
      let distanceCost = this.distance * distanceRate;
      let timeCost = this.time * timeRate;
  
      return baseFare + distanceCost + timeCost;
    }
  }
  
  const calculator = new UberPriceCalculator(10, 10);
  const price = calculator.calculatePrice();
  
  console.log(price); // 3.5