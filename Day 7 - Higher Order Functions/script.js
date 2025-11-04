const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Use map to create a new array by changing each country to uppercase in the countries array.
uppedCountries = countries.map(country => 
    country.toUpperCase()
)

console.log(uppedCountries)

// Use map to map the products array to its corresponding prices.

prices = products.map(items => 
    items.price
)

console.log(prices)

// Find the sum of price of products using only reduce reduce(callback))

sumOfPrices = products.reduce((acc,cur)=>{
    const price = parseFloat(cur.price);
    if(!isNaN(price)){
    acc += price
    }
    return acc
},0)

console.log(sumOfPrices)

// filter scores:
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

//  find
const ages1 = [24, 22, 25, 32, 35, 18]
const age = ages1.find((age) => age < 20)

console.log(age)

//---------------------
// Develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// In addition to those measures find the min, max, count
// You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. 

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

statistics = {
  count: function(){
    return ages.length
  },
  sum: function(){
    return ages.reduce((acc,curr)=>{
      acc += curr
      return acc
    },0)
  },
  min: function(){
      let minimum = ages[0] 
      for(const values of ages)
      {
        if(minimum > values)
        {
          minimum = values
        }
      }
      return minimum
    },
  max: function(){
    return Math.max(...ages)
  },
  range: function(){
    return this.max()-this.min()
  },
  mean: function(){
    return Math.ceil(this.sum()/this.count())
  },
  median: function(){
    sortedAges =  ages.sort()
    const mid = Math.floor(sortedAges.length / 2);
    if(sortedAges.length % 2 == 0)
    {
     return (sortedAges[mid - 1] + sortedAges[mid]) / 2;
    }
    else{
     return sortedAges[mid];
    }
  },
  mode: function(){
    const freq = {}
    ages.forEach(n => freq[n] = (freq[n] || 0) + 1);

    let maxFreq = 0;
    let mode = null;
    for (const n in freq) {
      if (freq[n] > maxFreq) {
        maxFreq = freq[n];
        mode = Number(n);
      }
    }

    return { mode, count: maxFreq };
  }
}

console.log('Count:',statistics.count())
console.log('Sum:',statistics.sum())
console.log('Minimum:',statistics.min())
console.log('Maximum:',statistics.max())
console.log('Range:',statistics.range())
console.log('Mean:',statistics.mean())
console.log('Median:',statistics.median())
console.log('Mode:', statistics.mode());