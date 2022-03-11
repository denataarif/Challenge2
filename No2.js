function checkTypeNumber (givenNumber){
    let hasil;
    if (typeof givenNumber === "number"){
      if (givenNumber % 2 === 0 ){
          return hasil = "Genap";
      }else{
          return hasil = "Ganjil";
      }
    }else if (givenNumber === undefined){
      return hasil = "Error: Bro where is the parameter"
    }else{
      return hasil = "Error: Invalid data Type"
    }
      
  }
  console.log(checkTypeNumber(10))
  console.log(checkTypeNumber(3))
  console.log(checkTypeNumber("3"))
  console.log(checkTypeNumber({}))
  console.log(checkTypeNumber([]))
  console.log(checkTypeNumber())