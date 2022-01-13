
'use strict';
// reverse array
let array=[1,2,4,6,8,10,11,0];
let temp;
function reverse(array){
    let j = array.length-1;
    for (let i = 0; i <= (array.length-1)/2 ; i++) {
        temp = array[i];
        array[i]=array[j];
        array[j]= temp;
        j--;
    }
    return array;
}
console.log('1', reverse(array));


// check if the array like this [2,5,7,9,8,3,1]
function mount(arr) {
    let len = arr.length;
    if (len < 3) return false;
    
    let climbed = false;
    let falled = false;

    for (let i = 0; i < len; i++) {
        const prev = i > 0 ? arr[i-1] : false;
        const curr = arr[i];
        
        if (prev !== false) {
            if (curr == prev) return false;
            if (curr > prev) {
                if (falled) return false;
                climbed = true;
            } else {
                falled = true;
            }
        }
    }
    
    return climbed && falled;
}
console.log('2',mount(array));



function validMountainArray(arr) {
    if (arr.length >= 3) {
    let front =0;
    let rear = arr.length - 1;
	
    for (front = 0; front < rear; ) {
        if (arr[front] < arr[front + 1]) {
            front++;
			
        } else if (arr[rear] < arr[rear - 1]) {
            rear--;
		
        } else {
            break;
        }
    }

    if (front === rear && front !== 0 && rear !== arr.length - 1) {
        return true;
    }
}
    return false;
}
console.log('3',validMountainArray(array));

// max number of one 
let array2 =[1,1,1,0];
function max(array) {
    let temp=0;
    let count=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]==1) {
            count++;
        }
        else{
            count=0;
        } 
        if (count>temp) {
            temp=count;
        }
   
    }
    return temp;
}
console.log('4',max(array2));

// how many number of index have even number
let test = [12,345,2,6,7896]
function even(array) {
    let count=0;
    for (let i = 0; i < array.length; i++) {
        let numofdigit =0;
        while(Math.floor(array[i])>0) {
            numofdigit++;
            array[i]/=10;
        }
        if (numofdigit%2==0) {
            count++;
        }
    }
    return count ;
}
console.log('5',even(test));


let nums = [-7,-3,2,3,11];
function Squares(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]*nums[i])
    }

    for (let j = 0; j < arr.length; j++) {
     for (let k = 0; k < arr.length; k++) {
         if(arr[j]<arr[k]) {
             let temp = arr[j];
             arr[j] = arr[k];
             arr[k]=temp;
         }
     }
    }
    return arr;
}
console.log('6',Squares(nums));


let nums1=[1,2,0,3,6,0,7]
function duplicateZeros(arr) {
    let j = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==0) {
         for (let j = arr.length; j >= i+1; j--){
             if (j >= i+1) {
                arr[j] = arr[j-1]
             }
             arr[j] = arr[j-1];
         }
         arr[i+1] = 0;
         i++;
         arr.length--;   
        }
        
         
     }
     return arr;
}
console.log('7',duplicateZeros(nums1));



let num1=[1,2,3];
let num2=[0,1,6];
function merge(nums1, m, nums2, n) {
    let length_of_num1 = m-1;
    let length_of_num2 = n-1;
    
    for(let i = m+n-1; i>=0;i--){
        if(nums1[length_of_num1] > nums2[length_of_num2]){
            nums1[i] =nums1[length_of_num1];
            length_of_num1--;
        }
        else{
            nums1[i] = nums2[length_of_num2];
            length_of_num2--;
        }
        if(length_of_num2 <0){
            return nums1;
        }
    }
    return nums1;
}
console.log('8', merge(num1,num1.length,num2,num2.length));


function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
       if (nums[i]== val) {
           while (nums[nums.length-1]==val) {
            nums.length--;
           }
            let temp = nums[i];
            nums[i]=nums[nums.length-1];
            nums[nums.length-1]=temp;
            nums.length--;
        
           
       }
    }
    return nums;
}
console.log('9',removeElement([3,2,2,3],3));


function removeDuplicate(nums) {
    let j=0;
    for (let i = 1; i < nums.length; i++) {
       if (nums[i] != nums[j]) {
       j++;
       nums[j] = nums[i]
       }
    }
    nums.length=j+1;
    return nums;
}
console.log('10',removeDuplicate([0,0,1,1,1,2,2,3,3,4,6,9,9,9,9]));


function replaceElement(arr) {
    let temp=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[j]>temp) {
                temp = arr[j];
            }
        }
        arr[i]=temp;
        temp=0;
    }
    arr[arr.length-1]=-1;
    return arr;
}
console.log('11',replaceElement([17,18,5,4,6,1]));


// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
function moveZeroes(nums) {
    for (let i = nums.length - 1; i > -1; i--) {
        if (nums[i] === 0) {
          nums.splice(i, 1);
          nums.push(0);
        }
      }

      return nums;
}
console.log('12',moveZeroes([0,0,1]));


// move even number in the front of the array
function sortArrayByParity(nums) {
    let arrIndex=0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2==0) {
            let temp = nums[i];
            nums[i]= nums[arrIndex];
            nums[arrIndex]= temp;
            arrIndex++;
        }
    }
    return nums;
}
console.log('13',sortArrayByParity([3,1,2,4]));



// find third max number 
function thirdMax(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === first || nums[i] === second || nums[i] === third) {
          continue;
      }
      if (nums[i] > first) {
        [first, second, third] = [nums[i], first, second];
      } else if (nums[i] > second) {
        [second, third] = [nums[i], second];
      } else if (nums[i] > third) {
        third = nums[i];
      }
    }
      if(third==-Infinity){
          return first;
      }else{
          return third;
      } 
}
console.log('14',thirdMax([3,1]));



// find missing number between min amd max value 
function findDisappearedNumbers(nums) {
    let array=[];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            array.push(i);
        } 
    }
    return array;
}
console.log('15',findDisappearedNumbers([4,3,2,7,8,2,3,1]));



// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.
function maxProfit(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
}
console.log('16',maxProfit([7,6,4,3,1]));


// Given an array, rotate the array to the right by k steps, where k is non-negative.
function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift( nums.pop()); 
    }
    return nums;
}
console.log('17',rotate([1,2,3,4,5,6,7],3))


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
           if (nums[i]==nums[j]) {
               return true;
           }
            
        }
        
    }
    return false;
}
console.log('18',containsDuplicate([1,2]));


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber(nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            delete obj[nums[i]];
        } else {
            obj[nums[i]] = 1;
        }
    }
    return Object.keys(obj)[0];
}
console.log('19', singleNumber([4,1,2,1,2]))


// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
function intersect(nums1,nums2) {
    let array=[];
    if (nums1.length>= nums2.length) {
        for (let i = 0; i < nums2.length; i++) {
            for (let j = 0; j < nums1.length; j++) {
               if (nums1[j]==nums2[i]) {
                   array.push(nums1[j]);
                   break;

               }
                
            }
            
        }
    }else{
        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
               if (nums1[i]==nums2[j]) {
                   array.push(nums1[i]);
                   break;
               }
                
            }
            
        }
    }
    return array;
}
console.log('20', intersect([1,2],[1,1]));



// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
    let value=1
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]+=value
       if(digits[i]!==0 && digits[i]%10===0){
        digits[i]=0
          value=1
       }
       else value=0
    }
    if(value) digits.unshift(value)
    return digits
}
console.log('21',plusOne([1,9]));


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    let array=[];
    for (let i = 0; i < nums.length; i++) {
       for (let j = i+1 ; j < nums.length; j++) {
           if (nums[i]+nums[j]==target) {
               array.push(i);
               array.push(j);
           }
           
       }
        
    }
    return array;
}
console.log('22',twoSum([2,4,3],5));



// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    // Each row must contain the digits 1-9 without repetition.
    // Each column must contain the digits 1-9 without repetition.
    // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
    // A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    // Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(arraySolution) {
    for (var y = 0; y < 9; ++y) {
        for (var x = 0; x < 9; ++x) {
            var value = arraySolution[y][x];

            if (value) {
                // Check the line
                for (var x2 = 0; x2 < 9; ++x2) {
                    if (value != "." && x2 != x && arraySolution[y][x2] == value) {
                        return false;
                    } 
                }

                // Check the column
                for (var y2 = 0; y2 < 9; ++y2) {
                    if (value != "." && y2 != y && arraySolution[y2][x] == value) {
                        return false;
                    } 
                }

                // Check the square
                var startY = Math.floor(y/3)*3;
                for (var y2 = startY; y2 < startY + 3; ++y2) {
                    var startX = Math.floor(x/3)*3;
                    for (x2 = startX; x2 < startX + 3; ++x2) {
                        if (value != "." && (x2 != x || y2 != y) && arraySolution[y2][x2] == value) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
}
console.log('23',isValidSudoku([["5","3",".",".","7",".",".",".","."]
                            ,["6",".",".","1","9","5",".",".","."]
                            ,[".","9","8",".",".",".",".","6","."]
                            ,["8",".",".",".","6",".",".",".","3"]
                            ,["4",".",".","8",".","3",".",".","1"]
                            ,["7",".",".",".","2",".",".",".","6"]
                            ,[".","6",".",".",".",".","2","8","."]
                            ,[".",".",".","4","1","9",".",".","5"]
                            ,[".",".",".",".","8",".",".","7","9"]]));



// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
function reverseString(s) {
    let j = s.length-1;
    let temp;
    for (let i = 0; i < (s.length-1)/2; i++) {
       temp = s[i];
       s[i]=s[j];
       s[j]=temp;
       j--;
    }
return s;
}
console.log('24',reverseString(["h","e","b","a","1"]));

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1
function firstUniqChar(s) {
    let obj={};
    for (let i = 0; i < s.length; i++) {
        let key=s[i];
      if (obj[key]==undefined) {
        obj[key]=1;
      }else{
          obj[key]++;
      }
    }
    for (let j = 0; j < s.length; j++) {
        let key = s[j];
        if (obj[key]==1) {
            return j;
        }
        
    }
    return -1;
}
console.log('25', firstUniqChar("aabb"));



// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
function fizzBuzz(n) {
    let arr=[];
    for (let i = 1; i <= n; i++) {
     if (i%15 == 0 ) {
         arr.push("FizzBuzz");
     }else if (i%5 == 0) {
        arr.push("Buzz");
     }else if (i%3 == 0) {
        arr.push("Fizz");
     }else{
         arr.push(i.toString())
     }
    }
    return arr;
}
console.log('26',fizzBuzz(3));



// Given an integer n, return the number of prime numbers that are strictly less than n.
function countPrimes(n) {
    let nums = [];
    let primeCount = 0;
    for(let i =0; i < n; i++){
        nums[i] = true;
    }
    for(let i=2; i * i < n; i++){
        if (nums[i] == true){
            for(let j = 2; j* i <n;j++){
                nums[j* i] = false;
            }
        }
    }
    for (let i = 2; i < n; i++){
        if (nums[i] === true){
            primeCount++;
        }
    }
    return primeCount;
}
console.log('27',countPrimes(2));

function countPrimes(n) {
    if(n <= 2) return 0;
    function isPrime(num) {
        for(let i = 3; i <= Math.sqrt(num); i+=2) {
            if(num % i === 0) return false;
        }
        return true;
    }
    let count = 1;
    
    for(let i = 3; i < n; i += 2) {
        if(isPrime(i)) count++;
    }
    return count;
}
console.log('27-2 ',countPrimes(2));


// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x

function isPowerOfThree(n) {
    while(n!==1){
        if(n < 3) return false
        if(n%3 !== 0) return false
        n = n/3
    }
    return true
}
console.log('28', isPowerOfThree(9))


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
function isPalindrome(s) {
    s = s.replace(/\W+/g, "").toLowerCase();
    let j= s.length-1;
    let i = 0
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++; j--;
    }
    return true;
}
console.log('29', isPalindrome("hycyh"))


function countPrimes3(n) {
    var primes = [];
    
    for (var i = 0; i < n; i++) {
        primes[i] = true;
    }
    
    primes[0] = false;
    primes[1] = false;
    
    for (var i = 2; i < Math.sqrt(n); i++) {
        for (let j = 2; i * j < n; j++) {
            primes[i * j] = false;
        }
    }
    
    var count = 0;
    for (var i = 0; i < primes.length; i++) {
        if (primes[i]) 
            count ++;
    }
    return count;
}
console.log('30', countPrimes(10));


function validator(expression) {
    let count= 0
    for (let i = 0; i < expression.length; i++){
        if (expression[i] == '('){
            count++}
        else if (expression[i] == ')'){
            if (count == 0){
                return false
            }
            else{
                count--
            }
        }
    }
    if (count == 0){
        return true
    }else{
        return false
    }
    
}
console.log('32', validator('()()'))