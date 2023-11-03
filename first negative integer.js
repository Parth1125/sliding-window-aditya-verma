
       function printFirstNegativeInteger(n, k, arr) {
            // code here
            const result = [];
      const window = [];
    
      let left = 0;
      let right = 0;
    
      while (right < n ){
        // Add the current element to the window
        if (arr[right] < 0) {
          window.push(arr[right]);
        }
    
        // Move the window if its size exceeds K
        if (right - left + 1 > k) {
          // Remove the leftmost element if it's negative
          if (arr[left] < 0) {
            window.shift();
          }
          left++;
        }
    
        // Check if the window size is equal to K
        if (right - left + 1 === k) {
          // Add the first negative element to the result
          if (window.length > 0) {
            result.push(window[0]);
          } else {
            result.push(0); // No negative element found
          }
        }
    
        right++;
      }
    
      return result;
        }
    
       



        //my code
        function printFirstNegativeInteger(n, k, arr) {
            // code here
            let i = 0
            let j = 0
            let list = []
            let ans = []
            while(j<n){
                if(arr[j]<=0){
                    list.push(arr[j])
                }
                if(j-i+1<k)j++
                if(j-i+1 == k){
                    if(list.length == 0)ans.push(0)
                    else{
                        ans.push(list[0])
                        if(arr[i]== list[0])list.pop()
                    }
                    i++
                    j++
                }
            }
                return ans
        } 