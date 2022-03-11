const dataAngka = [9,4,7,7,4,3,2,2,8]

function getAngkaTerbesarKedua(dataAngka){
  if (dataAngka !== 0 && !dataAngka){
    return "Error: Masukan Data Kedalam Array"
  }else if (dataAngka === 0){
    return "Error: data Nol"
  }
  var max = dataAngka[0]
  let secondBig = 0
  if (typeof dataAngka === "object"){
    for (let i=0; i < dataAngka.length; i++){
      if (dataAngka[i] > max){
        secondBig = max;
        max = dataAngka[i];
      }else if(dataAngka[i] > secondBig && dataAngka[i] !== max){
        secondBig = dataAngka[i];
      }
    }return secondBig;
  }else {
    return "Error"
  }
}

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())