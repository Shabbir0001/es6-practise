const ages = [19, 18, 10, 13, 14];
const ages2 = [12, 15, 17];
const ages3 = [39, 19, 14];

const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

// const maximum = Math.max(business, minister, sochib);

const takaPoisha = [650, 450, 250];
const maximum = Math.max(...takaPoisha);
console.log(maximum);
