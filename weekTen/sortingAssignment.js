// Radix sort
// source: https://www.youtube.com/watch?v=YXFI4osELGU

// Merge sort
// source: https://www.geeksforgeeks.org/merge-sort/ (yes, I used their algorithm)

class SortAllTheThings{
    radix(arr){
        let place = 1;
        let finished = false;
        let containers;
        while(!finished){
            // Containers represent values 0-9
            containers = [[],[],[],[],[],[],[],[],[],[]];
            // Iterate over the array
            for(let i = 0; i < arr.length; i++){
                // Each iteration get the right most number
                let value = Math.floor(arr[i]/Math.pow(10,(place-1)))
                let placeValue = value % 10
                // If the right most number is 0, put it in the 0th container, 1: 1st container, etc
                containers[placeValue].push(arr[i])
            }
            // If all numbers are sorted into the 0th container, youre done
            if(containers[0].length == arr.length){finished = true}
            // Arrays new order is the flattened containers, in prep for next iterations
            arr = containers.flat()
            // Next iterations, we will look at the value in the next place to the left
            place++;
        }
        return arr
    }

    merge(arr){
        // Base condition: Each array is length = 1
        if(arr.length > 1){
            // Split array into 2 equal(ish) arrays
            var mid = Math.floor(arr.length/2);
            var left = arr.slice(0,mid);
            var right = arr.slice(mid, arr.length);

            // Recursive condition: merge sort each half
            left = this.merge(left);
            right = this.merge(right);
            
            // Helper variables
            var i = 0;
            var j = 0;
            var k = 0;
            
            // Iterate through each position of the original array, place the lower value 
            // between the left and right arrays leftmost value into the original array
            // Then increment the subarrays index and repeat
            while(i < left.length && j < right.length){
                if(left[i] < right[j]){
                    arr[k] = left[i];
                    i++;
                } else {
                    arr[k] = right[j];
                    j++;
                }
                k++;
            }    

            // Clean up by placing the remaining value from whichever subarray still has one
            while(i < left.length){
                arr[k] = left[i];
                i++;
                k++;
            }
            while(j < right.length){
                arr[k] = right[j];
                j++;
                k++;
            }            
        }
        return arr;
    }
}

var sorter = new SortAllTheThings();
console.log(sorter.merge([23,74,873,634,243,84,39,356,1]))