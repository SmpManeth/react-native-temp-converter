const UNITS = {
  celsius: "°C",
  fahrenheit: "°F"
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celsius) {
    return (temperature - 32) / 1.8;
  }
  else if (unitTo === UNITS.fahrenheit) {
    return temperature * 1.8 + 32;
  }
  else{
    return temperature;
  }
}

function getOppositUnit(unit){

    if (unit === UNITS.celsius) {
        return UNITS.fahrenheit;
    }else if (unit === UNITS.fahrenheit) {
        return UNITS.celsius;
    }
}

export { UNITS , convertTemperatureTo, getOppositUnit };
