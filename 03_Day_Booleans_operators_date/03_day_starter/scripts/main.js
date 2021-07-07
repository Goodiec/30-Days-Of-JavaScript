// this is your main.js script
let firstName = 'Asabeneh'    // first name of a person
let lastName = 'Yetayeh'      // last name of a person
let country = 'Finland'       // country
let city = 'Helsinki'         // capital city
let age = 100                 // age in years
let isMarried = true

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

console.log('10' === 10)
console.log(parseInt(9.8) === 10)
console.log(true)
console.log(3 > 2)
console.log(1 !== 3 )

console.log(3<1)
console.log(false)
console.log(10 > 12)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

console.log('python'.length > 'javascript'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

let today = new Date
console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime())

let currentYear = today.getFullYear()

// let base = prompt('Enter base')
// let height = prompt('Enter height')
// alert('The area of the triangle is '+ (0.5) * (base * height))

// let sideA = prompt('Enter side a')
// let sideB = prompt('Enter side b')
// let sideC = prompt('Enter side c')
// alert('The perimeter of the triangle is '+ (parseInt(sideA) + parseInt(sideB) + parseInt(sideC)))

// let wid = prompt('Enter width')
// let len = prompt('Enter length')
// alert('The area of the rectangle is '+ (len * wid))
// alert('the perimeter of the rectangle is ' + (2 * (parseInt(len) + parseInt(wid))))

// let rad = prompt('Enter radius')
// alert('The area of the circle is '+ (Math.PI * Math.pow(rad, 2)))
// alert('the circumference of the circle is ' + (2 * (Math.PI * rad)))

// let x = prompt('Enter x')
// let y = prompt('Enter y')
// let slopeY = (2 * x) - 2
// let slopeX = (2 + parseInt(y))/2
// console.log(slopeY, slopeX)

let x1 = 2, x2 = 6, y1 = 2, y2 = 10
let slopeBtw = (y2 - y1)/(x2-x1)
console.log(slopeBtw)

// let workHours = prompt('Enter hours')
// let rate = prompt('Enter rate per hour')
// let weeklyEarning = workHours * rate
// console.log(weeklyEarning)

// let yourName = prompt('Enter your name')
// yourName.length > 7 ? alert('Your name is long'):alert('Your name is short')

// 
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)