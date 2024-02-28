function dogYears(planet, age) {
    age = age / 31556926;
    const earthYear = 365.25;
    let currentPlanetEarthYear;

    if (planet === 'mercury') {
        currentPlanetEarthYear = 0.2408467;
    } else if (planet === 'venus') {
        currentPlanetEarthYear = 0.61519726;
    } else if (planet === 'mars') {
        currentPlanetEarthYear = 1.8808158;
    } else if (planet === 'jupiter') {
        currentPlanetEarthYear = 11.862615;
    } else if (planet === 'saturn') {
        currentPlanetEarthYear = 29.447498;
    } else if (planet === 'uranus') {
        currentPlanetEarthYear = 84.016846;
    } else if (planet === 'neptune') {
        currentPlanetEarthYear = 164.79132;
    } else {
        currentPlanetEarthYear = 1.0;
    }

    const ageInDogYears = Math.round(((age * 7) * currentPlanetEarthYear)*100)/100;;

    return ageInDogYears;
}
