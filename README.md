# tabletop-RPG-tools
A selection of generator tools to get dice rolls, character prompts, and more

on codepen at
https://codepen.io/collection/aMwZQo

# CHARACTER GENERATOR
- randomly generates a fantasy character with name and flavor text
- name is randomly generated between 1 to 3 syllables, with the first syllable coming from one array, and the second and third syllables coming from a second array
```js
  outputName += firstSyllable[Math.floor(Math.random() * firstSyllable.length)];
  let randomNum = Math.floor(Math.random() * 3);
  for (let i = 0; i < randomNum; i++) {     
    outputName += secondSyllable[Math.floor(Math.random() * secondSyllable.length)];
  }
  return outputName;  
```
- much of the flavortext is similarly generated, with each section taking a prompt from one array and combining it with an option from a second array to increase the variety of responses
```js
  const randomize = (list) => {
    let output = list[Math.floor(Math.random() * list.length)];
    return output;
  }
  
  let secretGenerated = randomize(secretOptions);
  let secretAboutGenerated = randomize(secretAboutOptions);

  return (secretGenerated + " " + secretAboutGenerated);
```

![charactergenerator1](https://user-images.githubusercontent.com/47723396/183959861-60f3ad5e-78c6-4a69-9bd6-0f6b48bd791d.JPG)

![getcharacterexamples](https://user-images.githubusercontent.com/47723396/184031950-57362f90-cd06-4f7b-8901-2697f5d44647.png)


# LOOT GENERATOR
- randomly generates a list of loot between 1 to 3 items
- the three main loot categories are weapons, clothing, and trinkets, with each category subdivided into common and rare
```js
let weapons = {
  common: [/* ... array of strings */],
  rare: [/* ... array of strings */]
}
```
- once a subcategory is chosen chance weighted by category, the item within that category is truly selected at random
```js
  function getLoot() {
    let commonWeapons = 70;
    let rareWeapons = 30;
    let lootOptionTotal = commonWeapons + rareWeapons;
    
    function getLootArray() {
      let lootArray = Math.floor(Math.random()*lootOptionTotal);
      if (lootArray <= commonWeapons) { 
        lootArray = weapons.common; 
      }
      if (lootArray <= (commonWeapons + rareWeapons)) {
        lootArray = weapons.rare;
      }
      return lootArray;
    }
  
    let chestTotal = Math.floor(Math.random() * 3) + 1;
    let loot;
    for (let i = 0; i < chestTotal; i++) {
      let genLootArray = getLootArray();
      loot += genLootArray[Math.floor(Math.random() * genLootArray.length)];
    }
    return loot;
  }
```

![getloot1](https://user-images.githubusercontent.com/47723396/183961640-4c8c3757-4c7a-4fa0-979f-9b20e7a44ad8.JPG)

![getlootexamples](https://user-images.githubusercontent.com/47723396/184031964-68cc70ef-68f6-4af1-a6e6-386aa95a2582.png)



# DICE ROLLER
- randomly generates a dice roll, from a D-4 to a D-100
```js
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let rollD4 = () => randomNum(1, 4);
let rollD6 = () => randomNum(1, 6);
// ... (etc) ...

```

![rollthedice](https://user-images.githubusercontent.com/47723396/183961885-4b4c7e03-98d7-424d-a849-f2f3f4598510.JPG)

![dicerollexamples](https://user-images.githubusercontent.com/47723396/184032179-18328cfa-0343-4941-8502-0554a3482346.png)





