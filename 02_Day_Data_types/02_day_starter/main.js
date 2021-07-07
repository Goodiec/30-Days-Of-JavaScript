// this is your main.js script
let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.substring(3,challenge.length))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(" "))

let bigGs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(bigGs.split(","))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.indexOf('because'))
console.log(sentence1.lastIndexOf('because'))
console.log(sentence1.search('because'))

let trail_sen = ' 30 Days Of JavaScript '
console.log(trail_sen.trim(''))

console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
let allAs = /a/gi
console.log(challenge.match(allAs))
console.log('30 Days of'.concat(' ','JavaScript'))
console.log(challenge.repeat(2))

//Exercise 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
let ten = '10'
let tenInt = Number(ten)
console.log(typeof tenInt === typeof 10)

let floTen = parseFloat('9.8')
let roundTen = Math.round(floTen)
console.log(roundTen === 10)

console.log('Python'.includes('on') && 'Jargon'.includes('on'))
let jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes('jargon'))
let hun = Math.floor(Math.random() * 101)
console.log(hun)
console.log(Math.floor(Math.random() * (101 - 50) + 50))
console.log(Math.floor(Math.random() * 256))
let js = 'JavaScript'
console.log(js.charAt(Math.floor(Math.random() * js.length)))
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

console.log(sentence1.substr(31, sentence1.length - 1))

//Exercise 3 
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveP = /love/gi
console.log(love.match(loveP).length)

let sentence1P = /because/gi
console.log(sentence1.match(sentence1P).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSen = sentence.replace(/[^0-9a-z-A-Z ]/g, "")
console.log(cleanSen)

let salarySen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salP = /\d+/g
let senNum = salarySen.match(salP)
console.log(parseInt(senNum[0]) + parseInt(senNum[1]) + parseInt(senNum[2]))