const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Modified: ${document.lastModified}`;

const d = new Date();
let currentYear = d.getFullYear();
document.querySelector('#year').textContent = currentYear;
