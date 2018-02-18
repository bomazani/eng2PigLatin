const eng = document.createElement("div");
const english = "This is a sample script for translating English into Pig Latin."
const englishWords=english.split([" "]);
eng.textContent = english;
document.getElementById("div1").appendChild(eng);
for(i=0; i<englishWords.length; i++){
    // console.log(englishWords.length);
    // console.log(englishWords[i]);
    // let englishLetters =(englishWords[i].split([""]));
    
// ** Need to remove Captial letters for vowel recognition **
    englishWords[i]=englishWords[i].toLowerCase();
    // console.log(englishWords[i].charAt(0))
    // console.log(englishLetters);
    // console.log(englishLetters[0]);
    if(englishWords[i].charAt(0)=="a"||englishWords[0]=="e"||englishWords[0]=="i"||englishWords[0]=="o"||englishWords[0]=="U"){
// if(englishLetters[0]=="a"||englishLetters[0]=="e"||englishLetters[0]=="i"||englishLetters[0]=="o"||englishLetters[0]=="U"){
    // console.log(englishLetters);
    // console.log(englishLetters[0])
    console.log(englishWords[i].search("o"));
}
}    
