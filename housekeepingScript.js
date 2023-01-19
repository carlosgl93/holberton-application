// form input will be a string with the units numbers
// so i need to get the values, split the string into an array
// of units.
// fetch units details from backend
// parse units with Unit class and deliver a totalSum of assets
// later i have to insert a div for each index in that
// array to display the characteristics of each unit
// first of all, we will display a div with the resources needed
// for the trolley to carry. after that div, the detail of each unit
// will be displayed.

// nimrod has units of 2 bedrooms and 1 bathroom.
// 1 bedroom has 2 single beds and the other one is generally a queen bed.
// all beds need a large towel and each bathroom must have a feet towel,
// hand towel and face towel
// 2 toilet paper rolls
// 2 shampoos and 1 soap.

const hardCodedUnits = [
  {
    unitNumber: 8,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 9,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 10,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 11,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 12,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 15,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 17,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 18,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 21,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 2,
  },

  {
    unitNumber: 23,
    bedrooms: ["King", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 25,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 27,
    bedrooms: ["Queen", "Queen", "Single", "Single"],
    nBathrooms: 2,
  },
  {
    unitNumber: 31,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 34,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 36,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 37,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 38,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 39,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 40,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 42,
    bedrooms: ["King", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 44,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 45,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 46,
    bedrooms: ["Queen", "Queen", "Single", "Single"],
    nBathrooms: 2,
  },
  {
    unitNumber: 47,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 49,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
  {
    unitNumber: 50,
    bedrooms: ["Queen", "Single", "Single"],
    nBathrooms: 1,
  },
];

let finalResults = {
  resultSheets: {
    king: 0,
    queen: 0,
    single: 0,
  },
  resultTowels: {
    large: 0,
    hand: 0,
    feet: 0,
    face: 0,
  },
  shampoo: 0,
  soaps: 0,
  kitchenPack: 0,
  toiletPaper: 0,
  detergent: 0,
};

class Unit {
  constructor(bedrooms, nBathrooms) {
    this.bedrooms = bedrooms;
    this.nBathrooms = nBathrooms;
  }

  // bedrooms sera un array de strings: ['King' 'King' 'Single']
}

calculateAssets = (unit) => {
  // const bedrooms = unit.bedrooms.split()
  console.log({ unit });

  const _sheets = unit.bedrooms.map((bed) => {
    console.log(bed);
    switch (bed) {
      case "King":
        finalResults.resultSheets.king += 2;
        finalResults.resultTowels.large += 2;
        break;
      case "Queen":
        finalResults.resultSheets.queen += 2;
        finalResults.resultTowels.large += 2;
        break;
      case "Single":
        finalResults.resultSheets.single += 2;
        finalResults.resultTowels.large += 1;
        break;
      default:
        console.log("not supported sheet size");
        break;
    }
    return finalResults;
  });
  console.log(_sheets);

  finalResults.resultTowels.face += unit.nBathrooms;
  finalResults.resultTowels.feet += unit.nBathrooms;
  finalResults.resultTowels.hand += unit.nBathrooms;

  finalResults.kitchenPack += 1;
  finalResults.shampoo += unit.nBathrooms * 2;
  finalResults.soaps += unit.nBathrooms;
  finalResults.toiletPaper += unit.nBathrooms * 2;
  finalResults.detergent += 1;
};

const formDiv = document.getElementById("form");
const resultsDiv = document.getElementById("assetsToTake");
let unorderedResultsList = document.getElementById("resultList");

const formResults = () => {
  let formValue = document.forms["unitsToClean"]["whichUnits"].value;

  const enteredUnits = document.createElement("p");
  enteredUnits.setAttribute("id", "unitsEntered");
  let formUnitsNode = document.createTextNode(formValue);
  enteredUnits.appendChild(formUnitsNode);

  const unitsSubmittedNode = document.createElement("p");
  const unitsSubmittedText = document.createTextNode(
    `Units submitted: ${formValue}`
  );
  unitsSubmittedNode.appendChild(unitsSubmittedText);
  resultsDiv.appendChild(unitsSubmittedNode);

  const unitNumbers = formValue.split(" ");
  // ill convert the values to ints
  const unitsAsInts = unitNumbers.map((u) => parseInt(u));

  let resultUnits = [];

  const units = unitsAsInts.map((u) => {
    // i find the unit being searched
    let foundUnit = hardCodedUnits.find((_u) => {
      return _u.unitNumber == u;
    });
    const newUnit = new Unit(foundUnit.bedrooms, foundUnit.nBathrooms);
    // Create new unit obj
    resultUnits = [...resultUnits, newUnit];
    // update resultObj
    calculateAssets(newUnit);
    return finalResults;
  });

  //   before displaying the results div, the results are appended.

  const kingSheetsNode = document.createElement("li");
  const kingTextNode = document.createTextNode(
    `King sheets: ${finalResults.resultSheets.king}`
  );
  kingSheetsNode.appendChild(kingTextNode);
  unorderedResultsList.appendChild(kingSheetsNode);
  // queen append child
  const queenSheetsNode = document.createElement("li");
  const queenTextNode = document.createTextNode(
    `Queen sheets: ${finalResults.resultSheets.queen}`
  );
  queenSheetsNode.appendChild(queenTextNode);
  unorderedResultsList.appendChild(queenSheetsNode);
  // single append child
  const singleSheetsNode = document.createElement("li");
  const singleTextNode = document.createTextNode(
    `Single sheets: ${finalResults.resultSheets.single}`
  );
  singleSheetsNode.appendChild(singleTextNode);
  unorderedResultsList.appendChild(singleSheetsNode);
  // large towel append child
  const largeTowelNode = document.createElement("li");
  const largeTowelTextNode = document.createTextNode(
    `Large towels: ${finalResults.resultTowels.large}`
  );
  largeTowelNode.appendChild(largeTowelTextNode);
  unorderedResultsList.appendChild(largeTowelNode);
  // face append child
  const faceTowelNode = document.createElement("li");
  const faceTowelTextNode = document.createTextNode(
    `Face towels: ${finalResults.resultTowels.face}`
  );
  faceTowelNode.appendChild(faceTowelTextNode);
  unorderedResultsList.appendChild(faceTowelNode);
  // feet append child
  const feetTowelNode = document.createElement("li");
  const feetTowelTextNode = document.createTextNode(
    `Feet towels: ${finalResults.resultTowels.feet}`
  );
  feetTowelNode.appendChild(feetTowelTextNode);
  unorderedResultsList.appendChild(feetTowelNode);
  // hand append child
  const handTowelNode = document.createElement("li");
  const handTowelTextNode = document.createTextNode(
    `Hand towels: ${finalResults.resultTowels.hand}`
  );
  handTowelNode.appendChild(handTowelTextNode);
  unorderedResultsList.appendChild(handTowelNode);
  // shampoo append child
  const shampooNode = document.createElement("li");
  const shampooTextNode = document.createTextNode(
    `Shampoos: ${finalResults.shampoo}`
  );
  shampooNode.appendChild(shampooTextNode);
  unorderedResultsList.appendChild(shampooNode);
  // kitchenPack append child
  const kitchenPackNode = document.createElement("li");
  const kitchenPackTextNode = document.createTextNode(
    `Kitchen Pack: ${finalResults.kitchenPack}`
  );
  kitchenPackNode.appendChild(kitchenPackTextNode);
  unorderedResultsList.appendChild(kitchenPackNode);
  // soaps append child
  const soapsNode = document.createElement("li");
  const soapsTextNode = document.createTextNode(`Soaps: ${finalResults.soaps}`);
  soapsNode.appendChild(soapsTextNode);
  unorderedResultsList.appendChild(soapsNode);
  // toilet paper append child
  const toiletPaperNode = document.createElement("li");
  const toiletPaperTextNode = document.createTextNode(
    `Toilet paper rolls: ${finalResults.toiletPaper}`
  );
  toiletPaperNode.appendChild(toiletPaperTextNode);
  unorderedResultsList.appendChild(toiletPaperNode);
  //  detergent append child
  const detergentNode = document.createElement("li");
  const detergentTextNode = document.createTextNode(
    `Detergent: ${finalResults.detergent}`
  );
  detergentNode.appendChild(detergentTextNode);
  unorderedResultsList.appendChild(detergentNode);
  //   display results div:
  resultsDiv.style.display = "block";

  formDiv.style.display = "none";
};

formEnter.addEventListener("click", (event) => {
  event.preventDefault();
  formResults();
});

const resetCTA = document.getElementById("resetFlow");

resetCTA.addEventListener("click", () => {
  resetFlow();
});

const resetFlow = () => {
  finalResults = {
    resultSheets: {
      king: 0,
      queen: 0,
      single: 0,
    },
    resultTowels: {
      large: 0,
      hand: 0,
      feet: 0,
      face: 0,
    },
    shampoo: 0,
    soaps: 0,
    kitchenPack: 0,
    toiletPaper: 0,
    detergent: 0,
  };

  // let lastUnitSubmitted = enteredUnits.lastElementChild
  let lastLi = unorderedResultsList.lastElementChild;

  while (lastLi) {
    unorderedResultsList.removeChild(lastLi);
    lastLi = unorderedResultsList.lastElementChild;
  }
  // remove units submitted node
  const pElements = document.querySelectorAll("p");

  if (pElements[1]) resultsDiv.removeChild(pElements[1]);

  // if (resultsDiv.querySelectorAll('p')) {
  //     const unitsEntered = resultsDiv.querySelectorAll('p')
  //     resultsDiv.removeChild(unitsEntered)
  // }
  // const unitsSubmittedNode = document.getElementById('unitsEntered')

  // resultsDiv.removeChild(unitsSubmittedNode)

  resultsDiv.style.display = "none";
  formDiv.style.display = "block";
};

// window.addEventListener("DOMContentLoaded", async (e) => {
//   console.log("asdf");s
//   const querySnapshot = await getResorts();
//   console.log({ querySnapshot });
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });
// });
