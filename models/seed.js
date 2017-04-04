// Seed file
const { db, Otter } = require('./index');

const otterData = [
  {
    name: 'Gertrude',
    imgUrl: 'http://r.hswstatic.com/u_0/w_480/gif/otters-playful-169788211.jpg'
  },
  {
    name: 'Teddy',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/86/50/e0/8650e01ebf516dca9cb7b56d4678e2f6.jpg'
  },
  {
    name: 'Terry',
    imgUrl: 'https://www.librarycat.com/wp-content/uploads/2016/06/otter-murgeon.png'
  }
];

db.sync()
  .then(() => {
    const arrPromises = otterData.map(otter => {
      return Otter.create(otter);
    });

    Promise.all(arrPromises).then(() => {
      console.log(`${otterData.length} otters seeded`);
    });
  });

