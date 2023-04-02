const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';

const shippingCosts = {
  'RSA': 400,
  'NAM': 600,
  'NK': null,
  'default': 800
};

const currencySymbols = {
  'RSA': 'R',
  'NAM': '$',
  'default': '$'
};

const subtotal = 300 + 100 * 5 + 150 * 0 + 35 * 2 + 5 * 0; // calculate subtotal based on item prices

let shipping = null;
let currency = null;
let location = 'RSA';
let customers = 1;

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = shippingCosts[location] || shippingCosts['default'];
  currency = currencySymbols[location] || currencySymbols['default'];
  
  if (subtotal >= 1000 && customers === 1 && (location === 'RSA' || location === 'NAM')) {
    shipping = 0;
  } else if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }
  
  console.log(`Price: ${currency}${subtotal + shipping}`);
}



	