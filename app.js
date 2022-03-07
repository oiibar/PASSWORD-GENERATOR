let result = document.getElementById('result');
const generatePw = document.getElementById('generatePw');
const copyPw = document.getElementById('copyPw');
let num = document.getElementById('amount');
let strToNum = parseInt(num.value);


function generate(length) {
	let result           = '';
	let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;#$%&()*+,-./:;<=>?@[]^_{|}~';
	let charactersLength = characters.length;
	for ( let i = 0; i < length; i++ ) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
   return result;
}

copyPw.addEventListener('click', function() {
	let copyText = result;
	copyText.select();
	document.execCommand("copy");
});

generatePw.addEventListener('click', function () {
	result.value = generate(num.value);
});