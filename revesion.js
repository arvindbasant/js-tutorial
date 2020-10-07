const nan = NaN;
const max = Number.MAX_VALUE;
const infinity = Number.POSITIVE_INFINITY;

let num = "12.5";

console.log(Number.parseFloat(num) + 12);


const albums = [
  {
    id: 1,
    title: 'album 1',
    tracks: [
      { id: 101, title: 'a 1 song 1', time: 6, singers: ['singer 1'] },
      { id: 102, title: 'a 1 song 2', time: 7, singers: ['singer 2', 'singer 3'] }
    ],
    singers: ['singer 1', 'singer 2', 'singer 3'],
    totalRunningTime: 13
  },
  {
    id: 2,
    title: 'album 2',
    tracks: [
      { id: 201, title: 'a 2 song 1', time: 5, singers: ['singer 2'] },
      { id: 202, title: 'a 2 song 2', time: 10, singers: ['singer 1', 'singer 3'] }
    ],
    singers: ['singer 1', 'singer 2', 'singer 3'],
    totalRunningTime: 15
  },
  {
    id: 3,
    title: 'album 3',
    tracks: [
      { id: 301, title: 'a 3 song 1', time: 5, singers: ['singer 3', 'singer 4'] },
      { id: 302, title: 'a 3 song 2', time: 4, singers: ['singer 1', 'singer 2', 'singer 3'] },
      { id: 303, title: 'a 3 song 1', time: 5, singers: ['singer 1', 'singer 4'] },
    ],
    singers: ['singer 1', 'singer 2', 'singer 3', 'singer 4'],
    totalRunningTime: 9
  }
];


// get all tracks names and and running time from album 1 2 3

// map -> transform 
console.log(albums.flatMap(album => album.tracks));
console.log(albums.flatMap(album => album.tracks).map(track => ({ name: track.title, time: track.time })));

const sum = albums.reduce((acc, album) => acc + album.totalRunningTime, 0);
console.log({ sum });

const songsGreaterThanOrEqualTo5 = albums.flatMap(album => album.tracks).filter(track => track.time >= 5);

console.log({ songsGreaterThanOrEqualTo5 });

// find songs with single singer
const songsWithSingleSinger = albums.flatMap(album => album.tracks).filter(track => track.singers.length === 1);
console.log({ songsWithSingleSinger })

// find all tracks having 2 or more singers
const songsWithMultipleSinger = albums.flatMap(album => album.tracks).filter(track => track.singers.length > 1);
console.log({ songsWithMultipleSinger });


// get all tracks in an array
// get all song title in an array
// get all singer names in an array // remove duplicates
// get albums with totalRunningTime greater than 10



const obj = { a: 1, b: 2, c: 3 };

for (let prop in obj) {
  console.log(`prop name: ${prop} and value: ${obj[prop]}`);
}

console.log(Object.keys(obj));

Object.keys(obj).forEach(prop => console.log(`prop name: ${prop} and value: ${obj[prop]}`));
['a', 'b', 'c'].forEach(x => console.log(x, obj[x]));


console.log(Object.values(obj));
console.log(Object.entries(obj))