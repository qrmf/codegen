/************************************************
 * Constants
 ************************************************/
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/************************************************
 * Buttons
 ************************************************/
const alterIDGenerator = document.getElementById('alterIDGenerator');
const caseIDGenerator = document.getElementById('caseIDGenerator');
const documentIDGenerator = document.getElementById('documentIDGenerator');
const clearEntries = document.getElementById('clearEntries');

/************************************************
 * Elements
 ************************************************/
const outputDiv = document.getElementById('output');

const generateOutputEntry = (output) => {
  const outputContainer = document.createElement('div');

  outputContainer.className = 'output-item';
  outputContainer.innerHTML = output;

  outputDiv.appendChild(outputContainer);

  return undefined;
}

/**
 * @param {number} length
 * @param {boolean} numbers
 * @returns string
 */
const randomCharacterGenerator = (length, numbers) => {
  let ret = '';

  let chars = charset;
  if (numbers) chars += '0123456789'
  
  for (let i = 0; i < length; i++)
    ret += chars.charAt(
      Math.floor(
        Math.random() * charset.length));

  return ret;
}

alterIDGenerator.onclick = () => {
  generateOutputEntry(`ALTER ID: ${randomCharacterGenerator(5)}`);
}

documentIDGenerator.onclick = () => {
  let id = '';

  id += randomCharacterGenerator(4, false);
  id += '/';
  id += randomCharacterGenerator(4, true);
  id += '/';
  id += randomCharacterGenerator(3, true);
  id += '/';
  id += randomCharacterGenerator(1, false);

  generateOutputEntry(`Document ID: ${id}`);
}

caseIDGenerator.onclick = () => {
  const firstFive = String(
    Math.floor(
      Math.random() * Math.pow(10, 5)))
    .padStart(
      5,
      Math.floor(
        Math.random() * Math.pow(10, 10)));
  const lastSeven = String(
    Math.floor(
      Math.random() * Math.pow(10, 7)))
    .padStart(
      7,
      Math.floor(
        Math.random() * Math.pow(10, 10)));

  generateOutputEntry(`CASE  ID: ${firstFive}/${lastSeven}`);
}

clearEntries.onclick = () => {
  outputDiv.innerHTML = '';
}
