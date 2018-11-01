var languagesArrayCreation = function () {
  var languages = new Array ('Html', 'CSS', 'Java', 'PHP');
  return languages;
}

var numbersArrayCreation = function () {
var numbers= new Array (0, 1, 2, 3, 4, 5);
    return numbers;
}

var ElementReplacement = function (languages) {
languages[2]= 'Javascript';
return languages ;
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby');
languages.push('Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-1);
  numbers.unshift(-2);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
 languages.shift();
  return languages ;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
   return languages ;
}

var stringToArray = function (socialMediaInString) {
socialMedia = new Array ('Facebook','Twitter','Google +','Viadeo','LinkedIn');
  return socialMedia;
}

var arrayToString = function (languages) {
  languagesInString= ('CSS,Javascript,PHP,Ruby');
  return languagesInString;
}

var arraySort = function (socialMedia) {
return socialMedia.sort() ;
}

var arrayInvert = function (languages){
languages.reverse();
  return languages;
}
