const txtElement = ['Freelancer','Web Developer','Graphic Designer'] ;
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ngetik(){

if(count == txtElement.length){
    count = 0;
}
currenTxt = txtElement[count];

words = currenTxt.slice(0, ++txtIndex);
console.log(words);
document.querySelector('.efek-ngetik').textContent = words;

if(words.length == currenTxt.length) {
    count++;
    txtIndex = 0;
}
setTimeout(ngetik, 500)

})();
