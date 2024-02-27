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


### Manipulate Date
This function manipulates date and time 

Parameters:
Date: This should be Date string    eg: const d = new Date(); d.toString();
dateOnly: This is boolean parameter, formats only date
timeOnly: This is boolean parameter, formats only time
dateTime: This is boolean parameter, formats both date and time


Note: First parameter is Date string which is mandatory, and rest parameter pass only true to what you wabnt to format, others must be passed as false

dateManipulate(dateString:string, dateOnly:boolean, timeOnly:boolean, dateTime:boolean);

eg: First Get Date or Create Date

const date = '2024-02-27T16:35:13.088Z'

OR

const d = new date()
const date = d.toString()


OR

const d = new date(YOUR_OWN_DATE_STRING);
const date = d.toString()



const formatDate = dateManipulate(date , true, false, false);
const formatTime = dateManipulate(date , false, true, false);
const formatDateTime = dateManipulate(date , false, false, true);





License
This project is licensed under the MIT License
Feel free to adjust the content or formatting as needed!

Author: Pawan Darji
Email: pawandarji98@gmail.com