const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s String!', 'poop');

// Styled
console.log('%c I am some text', 'font-size: 50px;');

// warning!
console.warn('Oh No!!!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat three people per year');

// Testing
console.assert(1 === 4, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(document.p);
console.dir(document.p);
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog  years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Frankie');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
