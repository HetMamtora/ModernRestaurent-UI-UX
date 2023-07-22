import images from './images';

const mocktails = [
  {
    title: 'Mango Mule',
    price: '₹299',
    tags: 'Mango | Cucumber | Honey Syrup | 250 ml',
  },
  {
    title: 'Citrus Fizz',
    price: '₹335',
    tags: 'Seedlip Grove | Sparkling Water | 250 ml',
  },
  {
    title: 'Dry Cranberry Spitzer',
    price: '₹369',
    tags: 'Monlin Cranberry | Lime | Grape Soda | 250 ml',
  },
  {
    title: 'Virgin Cucumber Gimlet',
    price: '₹409',
    tags: 'Club Soda | Cucumber | Lime Juice | 250 ml',
  },
  {
    title: 'Vantage Point',
    price: '₹499',
    tags: 'London Light Syrup | Coffee | Orange Peel | 250 ml',
  },
];

const cocktails = [
  {
    title: 'Berry Smash',
    price: '₹299',
    tags: 'Rasberry | Strawberry | Mint Leaves | Soda | 250 ml',
  },
  {
    title: "Vitamin Parade",
    price: '₹335',
    tags: 'Carrot | Pineapple | Lime | 250 ml',
  },
  {
    title: 'Shirley Temple',
    price: '₹369',
    tags: 'Grenadine | Lime Juice | Ginger | 250 ml',
  },
  {
    title: 'See You on Wednesday',
    price: '₹409',
    tags: 'Jalapeño | celery juice | agave nectar | 250 ml',
  },
  {
    title: 'Garden Collins',
    price: '₹499',
    tags: 'Brewed Green Tea | Celery Syrup | Lime | 250 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Best restaurant out in the current street.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Holds future with greater success as a chef.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Table to table services are excellent.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'The dishes are just awesome for all.',
  },
];

export default { mocktails, cocktails, awards };