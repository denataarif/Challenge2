function isValidPassword (password){
    if(!password) {
      return false;
    }
    let lowerCase = /[a-z]/g
    let upperCase = /[A-Z]/g
    let number = /[0-9]/g
    if (password.length < 8) {
      return false;
    }
    if(!upperCase.test(password) || !lowerCase.test(password) || !number.test(password)){
      return false;
    } 
    return true;
  }
  
  
  console.log(isValidPassword('Meong2021'))
  console.log(isValidPassword('meong2021'))
  console.log(isValidPassword('@eong'))
  console.log(isValidPassword('Meong2'))
  console.log(isValidPassword(0))
  console.log(isValidPassword())