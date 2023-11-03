class Solution {
    longestKSubstr(s, k) {
        //code here
        let map1 = new Map()
        let i = 0
        let m = -1
        for(let j = 0 ; j<s.length;j++){
            map1[s[j]]++
            if(map1.size == k){
                m = Math.max(m,j-i+1)
            }
            if(map1.size > k){
                map1[s[i]]--
                if(map1[s[i]]== 0){
                    map1.delete(s[i])
                }
                i++
            }
        }
        return m
        
    }
}

// this js code is not working so here is the c++ code for the same



// class Solution{
//     public:
//       int longestKSubstr(string s, int k) {
//       // your code here
//        int ans = -1;
//           unordered_map<char,int>m;
//           int j = 0;
//           for(int i=0;i<s.length();i++) {
//               m[s[i]]++;
//               if(m.size() == k) {
//                   ans = max(ans,i-j+1);
//               }
//               if(m.size() > k) {
//                   m[s[j]]--;
//                   if(m[s[j]] == 0)  {
//                       m.erase(s[j]);
//                   }
//                   j++;
//               }
//           }
//           return ans;
//       }
//   };