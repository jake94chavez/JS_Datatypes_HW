// Selecting Datatypes

// 1. I would use a boolean. lightOn = true; for example.
// 2. String. email = "user.email@website.com"
// 3. Object. const spaceship = {hull: carbon fiber, weapons: "laser blasters", tools: ["tractor beam", "warp drive"]}
// 4. Array. const students = ["Jake", "Other Student", "etc.", "etc."]
// 5. Array of objects. const students = [{name: "Jake", location: "bar"}, {name: "Other Student", location:"home"}]
// 6. Array of objects with a nested array. const students = [{name: "Jake", location: "bar", favShows: ["Game of Thrones", "Adventure Time", "Could keep listing shows like this"]}, {name: "Other Student", location:"home" favShows: ["The Voice", "Insert popular television program here"]}]


// Take It Easy

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

rainbow[4] //would access blue

const jake = {
	favFood: "Spaghetti and Meatballs",
	hobby: "Watching television",
	town: "Cedar Park",
	favDataType: "Objects",
}

jake.hobby; //would access my hobby

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
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

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








