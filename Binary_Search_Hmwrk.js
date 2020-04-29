//Binary search by loop 

function binarySearch(arr, num){ 
  let firstIndx = 0;
  let lastIndx = arr.length - 1;
  let midNum;
  
  for(let i = firstIndx; i <= lastIndx; ){
    midNum = Math.floor((firstIndx + lastIndx) / 2);
      if(arr[midNum] == num){
        return midNum;
      } 
      if(arr[midNum] < num){
        firstIndx = midNum + 1;
      }
      if(arr[midNum] > num){
        lastIndx = midNum - 1;
      }
  }
  return -1;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
binarySearch(array, 12);



//Binary search by recursion 

function binarySearch(arr, num, firstIndx, lastIndx){

  let midNum = Math.floor((firstIndx + lastIndx) / 2);
  if(num == arr[midNum]){
    return midNum;
  }
  if(lastIndx - firstIndx == 1){
    return arr[midNum] == num ? firstIndx : arr[lastIndx] != num ? 
    "Can't find your number and it's index" : lastIndx;
  }
  if(num < arr[midNum]){
    return binarySearch(arr, num, firstIndx, midNum);
  }
  if(num > arr[midNum]){
    return binarySearch(arr, num, midNum, lastIndx);
  }
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
binarySearch(array, 14, 0, array.length - 1);