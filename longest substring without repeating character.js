var lengthOfLongestSubstring = function(s) {
    let i =0
    let j =0
    let set = new Set()
    let m =0
    while(j<s.length){
        if(!set.has(s[j])){
            set.add(s[j])
            j++
            m = Math.max(m,j-i)
        }else{
            set.delete(s[i])
            i++
        }
    }
   return m
};
console.log('hello world')