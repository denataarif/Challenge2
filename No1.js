function changeWord (selectedText, changedText, text){
    const newStr = text.replace(selectedText, changedText);
    return newStr;
}
const kalimat1= 'Andini sanga mencintai kamu selmanya'
const kalimat2= 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'


console.log(changeWord('mencintai' , 'membenci', kalimat1))
console.log(changeWord('bromo', 'semeru', kalimat2))
