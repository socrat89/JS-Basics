
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace('e',' ');
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.substr(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
    // return text.replace(/ /g, '');
}
const IsString = (text) => {
    return (typeof(text)==='string');
}

const getExtension = (text) => {
    return (text.split('.').pop());
}
const countSpaces = (text) => {
        //(my_string.split(" ").length - 1);
        return (text.split(' ').length-1);       
}
const InverseString = (text) => {
    //split() to return a new array
    var splitString = text.split(""); 
    //reverse() to reverse the new array
    var reverseArray = splitString.reverse();
    //join() to join all elements
    var joinArray = reverseArray.join(""); 
    //Return the reversed string
    return joinArray; 

}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
return Math.abs(num);
}
const absoluteValueArray = (array) => {
    for(var i=0;i< array.length;i++){
        array[i]= Math.abs(array[i]);
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round((Math.pow(radius, 2)) * Math.PI);
}
const hypothenuse = (ab, ac) => {
return (Math.hypot(ab,ac));
}
const BMI = (weight, height) => {
    return parseFloat((weight/(Math.pow(height,2))).toFixed(2));
//(weight / height * height)  Round to two decimals'
// var h=Math.pow(height,2);
//  var Bm=weight/h;
//  return parseFloat(Bm.toFixed(2));
}

const createLanguagesArray = () => {
    var languagesArr=["Html", "CSS", "Java", "PHP"];
    return languagesArr;
}

const createNumbersArray = () => {
    var NumArr= [0, 1, 2, 3, 4, 5];
    return NumArr;
}

const replaceElement = (languages) => {
//"Javascript"
    languages[2]="Javascript";
    return languages;
}

const addElement = (languages) => {
//Ruby" and "Python"
languages.push("Ruby", "Python");
return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}