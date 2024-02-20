# Daily Needs

**Daily Needs** is an npm package that provides a collection of functions catering to the daily needs of software developers during app development.

## Installation

You can install `daily-needs` via npm:

```bash
npm install daily-needs


Usage

#### Import statement
import { returnCommonRecords, removeDuplicates, filterArrayByKeyValue } from 'daily-needs';



### returnCommonRecords()
returnCommonRecords(array1, array2, key)
This function takes two identical arrays and a key value, and returns the common records between them.


### Parameters
Parameters:
array1: Array - The first array.
array2: Array - The second array.
key: String - The key to compare the records


## Returns
Returns:
Array - An array containing the common records.


## Example
Example:
const result = returnCommonRecords(array1, array2, key);






## removeDuplicates()
removeDuplicates(array, key)
This function removes duplicates from the provided array based on the specified key.


### Parameters
Parameters:
array: Array - The input array.
key: String - The key to identify duplicates.


### Returns
Returns:
Array - An array with duplicates removed.


## Example
Example:
const result = removeDuplicates(array1, key);






#### filterArrayByKeyValue()
filterArrayByKeyValue(array, key, value)
This function filters an array based on the provided key and value.


### Parameters
Parameters:
array: Array - The input array.
key: String - The key to filter by.
value: Any - The value to filter for.


## Returns
Returns:
Array - An array containing the filtered records.


## Example
Example:
const result = filterArrayByKeyValue(array1, key, value);






License
This project is licensed under the MIT License
Feel free to adjust the content or formatting as needed!

Author: Pawan Darji
Email: pawandarji98@gmail.com