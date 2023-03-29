// configuration.js

const company = 'ACME Inc.'
const year = 2022

export { company, year};

// scripts.js

import { company, year } from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message