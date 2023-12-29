let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    doors: 4,
    features: {
      color: "blue",
      engine: "2.0L",
    }
  };

  function getBrand() {
    var brand = car.brand;
    console.log("Car brand:", brand);
    document.write("Car brand: " + brand + "<br>");
    return brand;
  }

  function getDoors() {
    var doors = car.doors;
    console.log("Number of doors:", doors);
    document.write("Number of doors: " + doors + "<br>");
    return doors;
  }

  function getColor() {
    var color = car.features.color;
    console.log("Car color:", color);
    document.write("Car color: " + color + "<br>");
    return color;
  }

getBrand();
getDoors();
getColor();