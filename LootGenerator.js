function generateRandomLoot(){

  let weapons = {
    common:
      ['a rusty iron dagger', 
      'a pair of brass knuckles', 
      'a wooden staff', 
      'a paring knife', 
      'a longbow in poor condition', 
      'a slightly blunted sickle', 
      'a fist-sized rock speckled with dried blood'
      ],
    rare:
      ['a gleaming steel sword',
      'a silver dagger with an ornate hilt'
      ]
  }

  let clothing = {
    common: 
      ['a fraying linen tunic', 
      'torn linen pants', 
      'bloodstained leather gauntlets', 
      'a pair of worn leather boots', 
      'a length of rope used as a belt', 
      'a bandana with a crude drawing of a grinning skull',
      'a single silk slipper with a scuffed leather sole',
      'a dark grey hooded cape, made of an uncomfortably scratchy fabric',
      'a bright yellow apron covered in mystery stains and cat hair',
      'a long-sleeved shirt with colorful patches on the elbows',
      'two pairs of colorful knit socks',
      'a drab woolen shawl',
      'a long patchwork scarf'
      ],
    rare:
      ['a purple velvet cloak, slightly worn along the hem',
      'a pair of supple leather boots',
      'a golden watch chain without an attached pocketwatch',
      'a fur stole',
      'a cape of crimson feathers, slightly warm to the touch',
      'a pair of silk stockings'
      ]
  }

  let trinkets = {
    common:  
      ['a slightly bruised apple', 
      'a shiny blue stone worn smooth, likely from a riverbed', 
      'a crumpled sheet of paper with an unfinished drawing of a human figure, although one with very strange proportions', 
      'a copper coin worn smooth from frequent handling', 
      'a pocketful of animal treats', 
      'an iridescent black feather',
      'assorted chicken bones bleached white by the sun',
      'half a wedge of sharp white cheese, wrapped in a kitchen towel',
      'a handful of roasted nuts',
      'an abnormal amount of pocket lint',
      'ten wooden sticks, sanded smooth and cut into equal lengths',
      'a pack of playing cards covered in childlike ink doodles of various woodland creatures',
      'a clockwork timepiece still faintly ticking, although the time displayed is clearly inaccurate',
      'a handful of pages seemingly torn from a book, with labeled botanical illustations of various medicinal herbs',
      'a well-used lockpicking set in a worn leather case',
      'a threadbare set of bedsheets',
      'a pouch of crude wooden dice, unevenly weighted',
      'a colorful patchwork quilt',
      'a carved wooden horse',
      'a whittled wooden soup spoon',
      'a small reed flute',
      'a haphazardly organized bundle of official papers with signs of obvious forgery',
      'a bundle of handwritten sheet music tied with a green velvet ribbon',
      'half a stick of butter, with obvious bite marks at the end',
      'a pocketful of wood shavings',
      'a bit of flint',
      'a whetstone',
      'three silver coins',
      'two copper coins'
      ],
    rare:
      ['a delicate gold chain with a small crystal pendant',
      'a thumb-sized stoppered glass vial of a mysterious golden liquid, sealed with bright blue wax',
      'a human scapula with an intricate array of runes burned into the surface',
      'ten gold coins',
      ]
  }

  function getLoot() {
  
    //sets nonrandom chance values for each category of loot
    let commonWeapons = 70;
    let rareWeapons = 30;
    let commonClothing = 50;
    let rareClothing = 20;
    let commonTrinkets = 30;
    let rareTrinkets = 5;
    let lootOptionTotal = commonWeapons + rareWeapons + commonClothing + rareClothing + commonTrinkets + rareTrinkets;
    console.log('lootOptionTotal = ' + lootOptionTotal);

    //selects the category to randomize loot from by nonrandom chance values declared above
    function getLootArray() {
    
      let lootArray = Math.floor(Math.random()*lootOptionTotal);

      if (lootArray <= commonWeapons) {
        lootArray = weapons.common;
      }
      if (lootArray <= (commonWeapons + rareWeapons)) {
        lootArray = weapons.rare;
      }
      if (lootArray <= (commonWeapons + rareWeapons + commonClothing)) {
        lootArray = clothing.common;
      }
      if (lootArray <= (commonWeapons + rareWeapons + commonClothing + rareClothing)) {
        lootArray = clothing.rare;
      }
      if (lootArray <= (commonWeapons + rareWeapons + commonClothing + rareClothing + commonTrinkets)) {
        lootArray = trinkets.common;
      }
      if (lootArray <= (commonWeapons + rareWeapons + commonClothing + rareClothing + commonTrinkets + rareTrinkets)) {
        lootArray = trinkets.rare;
      }
      console.log('lootArray = ' + lootArray);
      return lootArray;
    }
  
    //selects between 1-3 loot items, starts with divider and inserts divider after each item
    let chestTotal = Math.floor(Math.random() * 3) + 1;
    let loot = ['<div class="item-break"> ~ </div>'];
    for (let i = 0; i < chestTotal; i++) {
      console.log('i = ' + i);
      let genLootArray = getLootArray();
      console.log('genLootArray = ' + genLootArray);
      loot += genLootArray[Math.floor(Math.random() * genLootArray.length)];
      loot += ' <br> <div class="item-break"> ~ </div>'
      console.log('loot = ' + loot);
    }
    return loot;
  }
  
  let result = getLoot();
  console.log(result);
  return result;
}

function displayLoot(generateRandomLoot) {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = generateRandomLoot;
}

let button = document.getElementById('btn');
button.onclick = function() {
  let result = generateRandomLoot();
  displayLoot(result);
}

