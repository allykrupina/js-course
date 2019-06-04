/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */

function difference(arr, itemsToExclude) {
  let result = arr.filter((element) => !itemsToExclude.includes(element));
  console.log(result);
}

difference([2, 1, 5], [2, 3]);

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */

const persons = [
  { gender: 'male', name: 'Max'},
  { gender: 'male', name: 'Fred'},
  { gender: 'female', name: 'Jane'},
];

let groupedPeople = groupBy(persons, 'gender');

function groupBy(array, value) {
  return array.reduce(function (acc, obj) {
    var key = obj[value];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

console.log(groupedPeople);

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */

function flatten(array) {
  return array.flat();
}

console.log(flatten([1, [2, 3], 4, 5]));

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */

function uniq(array) {
  return array.sort().filter(function(item, position, arr) {
    return !position || item != arr[position - 1];
  })
}

console.log(uniq([2, 1, 2]));
console.log(uniq([2, 1, 5, 6, 8, 8, 2]));

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */

function chunk(array, size) {
  let chunkedArr = [];
  for(let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i+size));
  }
  return chunkedArr;
}
console.log(chunk(['a', 'b', 'c', 'd'], 2));
