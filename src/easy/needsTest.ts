// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned


function removeElement(stringArray:any, value:any) {
    for (var i = 0; i < stringArray.length; i++) {

        if (stringArray[i] === value) {
            stringArray.splice(i, 1);
        }

    }
    return stringArray;
}

removeElement([1, 2, 3, 4, 5, 6, 7, 8, "jhdhgj", "asdf", "jkl"], "asdf");
