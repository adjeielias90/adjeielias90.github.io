function bubbleSort(arr){
    console.log("Unsorted Array: " + arr)
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j< ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    console.log("Sorted Array:" + arr);
   }
    
   // unsorted array
   var arr = [234, 43, 55, 63,  5, 6, 235, 547];
    
    
   // Now pass this array to the bubbleSort() function
   bubbleSort(arr);