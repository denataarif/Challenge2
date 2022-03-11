function checkEmail(email){
    if(!email) {
      return `email tidak boleh kosong`;
    }
    if(typeof(email) !== 'string') {
      return `email harus string`;
    }
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (validEmail.test(email)) {
      return "Valid";
    }else{
      if(email.indexOf('@') == -1 && email.indexOf('.') == -1){
        return "Error: Karena Tidak ada @ dan .";
      } 
      return "invalid"
    }
  }
  
  console.log(checkEmail('apranata@binar.co.id'))
  console.log(checkEmail('apranata@binar.com'))
  console.log(checkEmail('apranata@binar'))
  console.log(checkEmail('apranata'))
  console.log((checkEmail(3322)))
  console.log(checkEmail())