// Encounter Generator - JS

function generateRandomEncounter(location) {
    let roadEncounter = {
        common:
            ['an old man in a straw hat pushing a cart full of produce on his way to the nearest village to sell his crops',
            'a brown rabbit with a pink bow tied around its neck',
            'a three-legged dog dragging a very long tree branch, obviously wanting to play fetch',
            'a pack of three wolves looking very hungry',
            'a caravan of traders returning from selling their goods at the nearest city market with a nearly-empty wagon'
            ],
        rare:
            ['the remains of a picnic, seemingly abandoned mid-meal'
            ]
    }
    let forestEncounter = {
        common: 
            ['a colony of feral cats that have claimed this bit of forest as their territory',
            'a deer grazing in the distance'
            ],
        rare:
            ['a knight in gleaming steel armor, accompanied by a harried looking squire'
            ]
    }
    let cityEncounter = {
        common:  
            ['a beggar asking for money to feed their family',
            'a shady looking figure in a hooded cloak selling dubious-looking health potions'
            ],
        rare:
            ['a princess from a foreign kingdom who accidentally got seperated from her attendants'
            ]
    } 
  
    function getEncounter(location) {  
        let common = 70;
        let rare = 30;
        let encounterOptionTotal = common + rare;

        function getEncounterArray(location) {
            let encounterArray = Math.floor(Math.random()*encounterOptionTotal);
          
            if (location == "road") {
                if (encounterArray <= common) encounterArray = roadEncounter.common;
                else if (encounterArray < (common + rare)) encounterArray = roadEncounter.rare;
            }
            if (location == "city") {
                if (encounterArray <= common) encounterArray = cityEncounter.common;
                else if (encounterArray < (common + rare)) encounterArray = cityEncounter.rare;
            }
            if (location == "forest") {
                if (encounterArray <= common) encounterArray = forestEncounter.common;
                else if (encounterArray < (common + rare)) encounterArray = forestEncounter.rare;
            }
            return encounterArray;
        }
  
        let fetchedEncounterArray = getEncounterArray(location);
        let encounter = ['<div class="item-break"> ~ </div>'];
        encounter += fetchedEncounterArray[Math.floor(Math.random() * fetchedEncounterArray.length)];
        encounter += '<div class="item-break"> ~ </div>';
        return encounter;
    }
  
  let result = getEncounter(location);
  return result;
}

function displayEncounter(generateRandomEncounter) {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = generateRandomEncounter;
}

let buttonCity = document.getElementById('btnCity');
buttonCity.onclick = function() {
  let result = generateRandomEncounter("city");
  displayEncounter(result);
}

let buttonRoad = document.getElementById('btnRoad');
buttonRoad.onclick = function() {
  let result = generateRandomEncounter("road");
  displayEncounter(result);
}

let buttonForest = document.getElementById('btnForest');
buttonForest.onclick = function() {
  let result = generateRandomEncounter("forest");
  displayEncounter(result);
}
