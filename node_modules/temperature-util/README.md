[![npm](https://img.shields.io/npm/v/temperature-util.svg)](https://www.npmjs.com/package/temperature-util)
[![npm downloads](https://img.shields.io/npm/dt/temperature-util.svg)](https://www.npmjs.com/package/temperature-util)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/temperature-util.svg)](https://github.com/joeyschroeder/temperature-util/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/temperature-util.svg)](https://github.com/joeyschroeder/temperature-util/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Dependency status](https://david-dm.org/joeyschroeder/temperature-util/status.svg)](https://david-dm.org/joeyschroeder/temperature-util/)
[![devDependency status](https://david-dm.org/joeyschroeder/temperature-util/dev-status.svg)](https://david-dm.org/joeyschroeder/temperature-util/?type=dev)

# 🌡️ temperature-util
A dependency-free library of temperature conversion functions, format utilities, and constants.

## Installation
`npm install temperature-util --save`

## Usage

### Conversion Functions
This library includes functions to convert any Celsius, Fahrenheit, Kelvin, or Rankine temperature to any other temperature measurement.

#### `convertTemperature`
There is a flexible conversion function `convertTemperature`, which accepts a `number`-type temperature, a "from" temperature measurement, and a "to" temperature measurement, then returns a `number`-type result.

###### Example
```
import { convertTemperature } from 'temperature-util';

const celsiusTemperature = 0;
const fromMeasurement = 'celsius';
const toMeasurement = 'fahrenheit';

const fahrenheitTemperature = convertTemperature(celsiusTemperature, fromMeasurement, toMeasurement); // 32
```

##### Direct Conversion Functions
There is additionally direct functions to convert any `number`-type temperature to an other temperature measurement abbreviation. Simply import a conversion function from this library and pass any `number`-type parameter to the function to return the converted `number`-type result.

###### Example
```
import { celsiusToFahrenheit, celsiusToKelvin, celsiusToRankine } from 'temperature-util';

const celsiusTemperature = 0;

const fahrenheitTemperature = celsiusToFahrenheit(celsius); // 32
const kelvinTemperature = celsiusToKelvin(celsius); // 273.15
const rankineTemperature = celsiusToRankine(celsius); // 491.67
```

###### Available Conversion Functions
The following functions all take a single `number`-type parameter and return a `number`:

* **celsiusToFahrenheit**(celsius: *number*) *number*
* **celsiusToKelvin**(celsius: *number*) *number*
* **celsiusToRankine**(celsius: *number*) *number*

* **fahrenheitToCelsius**(fahrenheit: *number*) *number*
* **fahrenheitToKelvin**(fahrenheit: *number*) *number*
* **fahrenheitToRankine**(fahrenheit: *number*) *number*

* **kelvinToCelsius**(kelvin: *number*) *number*
* **kelvinToFahrenheit**(kelvin: *number*) *number*
* **kelvinToRankine**(kelvin: *number*) *number*

* **rankineToCelsius**(rankine: *number*) *number*
* **rankineToFahrenheit**(rankine: *number*) *number*
* **rankineToKelvin**(rankine: *number*) *number*

### Formatting Functions
This library includes functions to append any `string` or `number`-type temperature with a temperature measurement abbreviation.

#### `formatTemperature`
There is a flexible format function `formatTemperature`, which accepts a temperature any `string` or `number`-type temperature and a temperature measurement and returns a `string`-type result.

##### Example
```
import { formatTemperature } from 'temperature-util';

const temperature = 0;
const measurement = 'celsius';

const celsiusTemperature = formatTemperature(temperature, measurement); // 0 °C
```

##### Direct Formatting Functions
There is additionally direct functions to append any `string` or `number`-type temperature with a temperature measurement abbreviation.  Simply import a formatting function from this library and pass any `string` or `number`-type parameter to the function to return the converted `string`-type result.

###### Example
```
import {
  formatToCelsius,
  formatToFahrenheit,
  formatToKelvin,
  formatToRankine
} from 'temperature-util';

const temperature = 0;

const celsiusTemperature = formatToCelsius(temperature); // 0 °C
const fahrenheitTemperature = formatToFahrenheit(temperature); // 0 °F
const kelvinTemperature = formatToKelvin(temperature); // 0 K
const rankineTemperature = formatToRankine(temperature); // 0 °R
```

### Constants
This library includes several constants in Celsius to help aid you in your temperature calculations.  Simply import a `number`-type constant from this library.

#### Example
```
import {
  ABSOLUTE_ZERO_IN_CELSIUS,
  AVERAGE_HUMAN_BODY_TEMPERATURE_IN_CELSIUS,
  BOILING_POINT_OF_WATER_CELSIUS,
  FREEZING_POINT_OF_WATER_CELSIUS,
  SURFACE_OF_THE_SUN_IN_CELSIUS
} from 'temperature-util';
```

## Versioning
I use [SemVer](https://docs.npmjs.com/getting-started/semantic-versioning) for versioning. For the versions available, see the [tags on this repository](https://github.com/joeyschroeder/temperature-util/tags).

## Authors
* **Joey Schroeder** - *Initial work* - [joeyschroeder.com](https://joeyschroeder.com)

See also the list of [contributors](https://github.com/joeyschroeder/temperature-util/graphs/contributors) who participated in this project.

## Contributing
Please submit a pull request with any features/fixes for the project. I apologize in advance for the slow action on pull requests and issues. Please follow the [ESLint rules](https://github.com/joeyschroeder/temperature-util/blob/master/.eslintrc.json) for the project.

## To-Dos
In the future, it's hoped this library includes:
* Delisle temperature conversion functions and formats
* Newton temperature conversion functions and formats
* Réaumur temperature conversion functions and formats
* Rømer temperature conversion functions and formats

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.

## Acknowledgments
Hat tip to anyone who's code was used! 🤠
