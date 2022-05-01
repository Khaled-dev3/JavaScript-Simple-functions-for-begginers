let testArray = [0, '1', true, 'not'] 

function FindIndexOfItem(array,item) {
   return array.indexOf(item, 0)
}

FindIndexOfItem(testArray, true) // result : 2
