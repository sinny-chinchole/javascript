function isPalindrome(str) {
  debugger;
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Example usage:
  const exampleString = "A man, a plan, a canal, Panama!";
  console.log(isPalindrome(exampleString));
  