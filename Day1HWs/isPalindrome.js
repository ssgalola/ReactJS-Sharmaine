function isPalindrome(stringInput){
	const stringInputArray = stringInput.split('')
  const reversedStringInputArray = stringInputArray.reverse()
  const reversedStringInput = reversedStringInputArray.join('')
  isAPalindrome = stringInput === reversedStringInput
  if (isAPalindrome){
  	return true
  } else{
  	return false
  }
}

console.log(isPalindrome(`uwu`))
console.log(isPalindrome(`racecar`))
console.log(isPalindrome(`deified`))
console.log(isPalindrome(`civic`))
console.log(isPalindrome(`radar`))

console.log(isPalindrome(`shiba inu`))
console.log(isPalindrome(`dogecoin`))
console.log(isPalindrome(`meme`))
console.log(isPalindrome(`btc`))