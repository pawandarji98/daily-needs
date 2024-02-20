export function returnCommonRecords(array1:any[], array2:any[], key:string) {
    const commonRecords:any = [];
    const keySet = new Set(array2.map((obj:any) => obj[key]));
    array1.forEach((obj:any) => {
        if (keySet.has(obj[key])) {
            commonRecords.push(obj);
        }
    });
    
    return commonRecords;
}

export function removeDuplicates(array:any[], key:string) {
    const seen = new Set();
    return array.filter((obj:any) => {
        const keyValue = obj[key];
        if (seen.has(keyValue)) {
            return false;
        } else {
            seen.add(keyValue);
            return true;
        }
    });
}

export function filterArrayByKeyValue(array:any[], key:string, value:any) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

