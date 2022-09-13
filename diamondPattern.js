function diamondKata(str) {
  let originalString = str
  for (let i = 0; i < originalString.length; i++) {
    let tempString = ''
    for (let j = originalString.length - 1; j > 0; j--) {
      if (originalString[i] === originalString[j]) {
        tempString += originalString[j]
      } else {
        tempString += ' '
      }
    }
    for (let j = 0; j < originalString.length; j++) {
      if (originalString[i] === originalString[j]) {
        tempString += originalString[j]
      } else {
        tempString += ' '
      }
    }
    console.log(tempString)
  }
  for (let i = originalString.length - 2; i >= 0; i--) {
    let tempString = ''
    for (let j = originalString.length - 1; j >= 0; j--) {
      if (originalString[i] === originalString[j]) {
        tempString += originalString[j]
      } else {
        tempString += ' '
      }
    }
    for (let j = 1; j < originalString.length; j++) {
      if (originalString[i] === originalString[j]) {
        tempString += originalString[j]
      } else {
        tempString += ' '
      }
    }
    console.log(tempString)
  }
}
diamondKata('ABCD')
