function getSplitName(personName){
    if(!personName){
        return "Error: Masukan Nama 3 Kata"
    }
    const splitName = personName.split(" ")
    let First
    let Middle
    let Last
    if(splitName.length >  3) return "Nama Harus 3 kata";
    
    if(splitName.length < 3){
    
     First  = splitName[0] 
     Middle =  null
     Last = splitName[1] ? splitName[1] : null
    
    }else{
     First  = splitName[0]
     Middle = splitName[1] ? splitName[1] : null
     Last = splitName[2] ? splitName[2] : null
   
    }
    
    return `firstname: ${First}, middlename: ${Middle}, lastname: ${Last}`
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))