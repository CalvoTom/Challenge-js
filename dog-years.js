function dogYears(planet, age) {
    let currentPlanetEarthYear;

    if (planet === 'mercury') {
        currentPlanetEarthYear = 31557600 * 0.2408467;
    } else if (planet === 'venus') {
        currentPlanetEarthYear = 31557600 * 0.61519726;
    } else if (planet === 'mars') {
        currentPlanetEarthYear = 31557600 * 1.8808158;
    } else if (planet === 'jupiter') {
        currentPlanetEarthYear = 31557600 * 11.862615;
    } else if (planet === 'saturn') {
        currentPlanetEarthYear = 31557600 * 29.447498;
    } else if (planet === 'uranus') {
        currentPlanetEarthYear = 31557600 * 84.016846;
    } else if (planet === 'neptune') {
        currentPlanetEarthYear = 31557600 * 164.79132;
    } else {
        currentPlanetEarthYear = 31557600;
    }

    const ageInDogYears = (age / currentPlanetEarthYear)*7;

    return Math.round(ageInDogYears * 100) / 100;
}

console.log(dogYears('mercury', 2134835688));
