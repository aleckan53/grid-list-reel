export const fetchData = () => {
  console.log('mocking API request');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    });
  });
};

const data = [
  {
    id: 1,
    img: 'http://www.pngmart.com/files/3/BMW-M3-Transparent-Background.png',
    name: 'BMW 328ci',
    status: 'active',
    total: 35000,
    started: '2017-5-1',
    perDay: 15,
    saved: 12000,
    percentSaved: 34,
  },
  {
    id: 2,
    img: 'https://as-images.apple.com/is/iphone-xr-og-201809?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1535560276044',
    name: 'Iphone',
    status: 'paused',
    total: 900,
    started: '2019-6-1',
    perDay: 5,
    saved: 60,
    percentSaved: 6.6,
  },
  {
    id: 3,
    img: 'http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/9/42625209-1-f.jpg',
    name: 'Scooter',
    status: 'active',
    total: 350,
    started: '2019-7-1',
    perDay: 10,
    saved: 30,
    percentSaved: 68,
  },
  {
    id: 4,
    img: 'https://png.pngtree.com/element_origin_min_pic/16/08/14/1457b0160a7b1b7.jpg',
    name: 'Gucci bag',
    status: 'active',
    total: 400,
    started: '2019-7-1',
    perDay: 10,
    saved: 50,
    percentSaved: 42,
  },
  {
    id: 5,
    img: 'https://png.pngtree.com/element_our/sm/20180511/sm_e7f94f16b5c1dee1cde84f83273b3a36.png',
    name: 'Motorcycle',
    status: 'paused',
    total: 15000,
    started: '2019-3-1',
    perDay: 20,
    saved: 5000,
    percentSaved: 33.3,
  },
  {
    id: 6,
    img: 'https://media.cntraveler.com/photos/581a03426928748a1e19f066/master/w_420,c_limit/copenhagen-denmark-GettyImages-466666680.jpg',
    name: 'Trip to Europe',
    status: 'active',
    total: 5000,
    started: '2019-4-1',
    perDay: 7,
    saved: 336,
    percentSaved: 56,
  },
  {
    id: 7,
    img: 'http://pngimg.com/uploads/laptop/laptop_PNG5941.png',
    name: 'Laptop',
    status: 'active',
    total: 2400,
    started: '2019-1-1',
    perDay: 3,
    saved: 2100,
    percentSaved: 87.5,
  },
  {
    id: 8,
    img: 'http://pngimg.com/uploads/headphones/headphones_PNG7640.png',
    name: 'Headphones',
    status: 'paused',
    total: 350,
    started: '2019-1-1',
    perDay: 10,
    saved: 320,
    percentSaved: 90,
  },
];