// Selecting Datatypes

// 1. I would use a boolean. lightOn = true; for example.
// 2. String. email = "user.email@website.com"
// 3. Object. const spaceship = {hull: carbon fiber, weapons: "laser blasters", tools: ["tractor beam", "warp drive"]}
// 4. Array. const students = ["Jake", "Other Student", "etc.", "etc."]
// 5. Array of objects. const students = [{name: "Jake", location: "bar"}, {name: "Other Student", location:"home"}]
// 6. Array of objects with a nested array. const students = [{name: "Jake", location: "bar", favShows: ["Game of Thrones", "Adventure Time", "Could keep listing shows like this"]}, {name: "Other Student", location:"home" favShows: ["The Voice", "Insert popular television program here"]}]


// Take It Easy

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

rainbow[4] 
// Blue

const jake = {
	favFood: "Spaghetti and Meatballs",
	hobby: "Watching television",
	town: "Cedar Park",
	favDataType: "Objects",
}

jake.hobby;
// => Watching television

// Crazy Object!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
// => omg my mouth is burning
console.log(crazyObject.larry.quotes[0]);
// => Pretty pretty prettayyyyy good
console.log(crazyObject.larry.characters[2].favourtieHobby);
// => Swearing at Larry and Jeff
console.log(crazyObject.larry.nicknames[1]);
// => Chicken Teriyaki Boyyyyyy
console.log(crazyObject.larry.characters[1]);
// => {name: 'funkhauser', occupation: 'tv dude'}

// Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// Bond Films

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const bondTitles = [];
for (i = 0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);
/* => [ 'Skyfall',
  'Thunderball',
  'Goldfinger',
  'Live and Let Die',
  'You Only Live Twice',
  'The Spy Who Loved Me',
  'Casino Royale',
  'Moonraker',
  'Diamonds Are Forever',
  'Quantum of Solace',
  'From Russia with Love',
  'Die Another Day',
  'Goldeneye',
  'On Her Majesty\'s Secret Service',
  'The World is Not Enough',
  'For Your Eyes Only',
  'Tomorrow Never Dies',
  'The Man with the Golden Gun',
  'Dr. No',
  'Octopussy',
  'The Living Daylights',
  'A View to a Kill',
  'License to Kill' ]
*/

const oddBonds = [];
for (i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 != 0) {
		oddBonds.push(bondFilms[i]);
	}
}

console.log(oddBonds);
/* => [ { title: 'Thunderball',
    year: 1965,
    actor: 'Sean Connery',
    gross: '$1,014,941,117' },
  { title: 'Live and Let Die',
    year: 1973,
    actor: 'Roger Moore',
    gross: '$825,110,761' },
  { title: 'You Only Live Twice',
    year: 1967,
    actor: 'Sean Connery',
    gross: '$756,544,419' },
  { title: 'The Spy Who Loved Me',
    year: 1977,
    actor: 'Roger Moore',
    gross: '$692,713,752' },
  { title: 'Moonraker',
    year: 1979,
    actor: 'Roger Moore',
    gross: '$655,872,400' },
  { title: 'Diamonds Are Forever',
    year: 1971,
    actor: 'Sean Connery',
    gross: '$648,514,469' },
  { title: 'From Russia with Love',
    year: 1963,
    actor: 'Sean Connery',
    gross: '$576,277,964' },
  { title: 'Goldeneye',
    year: 1995,
    actor: 'Pierce Brosnan',
    gross: '$529,548,711' },
  { title: 'On Her Majesty\'s Secret Service',
    year: 1969,
    actor: 'George Lazenby',
    gross: '$505,899,782' },
  { title: 'The World is Not Enough',
    year: 1999,
    actor: 'Pierce Brosnan',
    gross: '$491,617,153' },
  { title: 'For Your Eyes Only',
    year: 1981,
    actor: 'Roger Moore',
    gross: '$486,468,881' },
  { title: 'Tomorrow Never Dies',
    year: 1997,
    actor: 'Pierce Brosnan',
    gross: '$478,946,402' },
  { title: 'Octopussy',
    year: 1983,
    actor: 'Roger Moore',
    gross: '$426,244,352' },
  { title: 'The Living Daylights',
    year: 1987,
    actor: 'Timothy Dalton',
    gross: '$381,088,866' },
  { title: 'A View to a Kill',
    year: 1985,
    actor: 'Roger Moore',
    gross: '$321,172,633' },
  { title: 'License to Kill',
    year: 1989,
    actor: 'Timothy Dalton',
    gross: '$285,157,191' } ]
*/

let totalGross = 0;
for (i = 0; i < bondFilms.length; i++) {
	bondFilms[i].gross = Number(bondFilms[i].gross.replace(/\$|\,/g, ''));
	totalGross += bondFilms[i].gross;
}

console.log(totalGross);
// => 13821621224








