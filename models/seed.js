// Seed file
const { Otter } = require('./index');

const otterData = [
  {
    name: 'Gertrude'
  },
  {
    name: 'Teddy'
  },
  {
    name: 'Terry'
  }
];

// const seedingPromise = Otter.create(otterData[0]);
const arrPromises = otterData.map(otter => {
  return Otter.create(otter);
});

Promise.all(arrPromises).then(() => {
  console.log(`${otterData.length} otters seeded`);
});
