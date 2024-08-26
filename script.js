function indexOfIgnoreCase(str, subStr) {
  // Convert both the main string and the substring to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  
  // Use the indexOf method to find the first occurrence of the substring
  return lowerStr.indexOf(lowerSubStr);
}

// Test cases
console.log(indexOfIgnoreCase("Hello World", "world"));  // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));          // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));           // Output: -1