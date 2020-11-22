let shoppingList = [ 'cereal', 'cheese', 'ice' ];
let lotto = [ 45, 12, 23, 25, 34 ];
let myCollection = [ 12, 'dog', true, null, NaN ];

console.log(lotto.length);
console.log(shoppingList[1]);

shoppingList[2] = 'milk'; //['cereal', 'cheese', 'milk']
shoppingList[shoppingList.length] = 'bread'; //['cereal', 'cheese', 'milk', 'bread']
shoppingList.push('butter'); //['cereal', 'cheese', 'ice', 'bread', 'butter']
shoppingList.pop(); //['cereal', 'cheese', 'ice', 'bread']
shoppingList.unshift('butter'); //['butter', 'cereal', 'cheese', 'ice', 'bread']
shoppingList.shift(); //['cereal', 'cheese', 'ice', 'bread']

console.log(myCollection.concat(lotto));
console.log(lotto.includes(23));
console.log(lotto.indexOf(23));
console.log(lotto.reverse());
console.log(lotto.join('...'));
console.log(lotto.slice(0, 2));
console.log(lotto.splice(4, 0, 8));
console.log(lotto.sort());
