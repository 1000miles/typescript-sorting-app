import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersColllection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([200, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersColllection('Xaayb');
// Pass in charactersCollection with Sortable interface
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
