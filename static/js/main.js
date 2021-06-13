/************************************************
 * Buttons
 ************************************************/
const alterIDGenerator = document.getElementById('alterIDGenerator');
const caseIDGenerator = document.getElementById('caseIDGenerator');
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

alterIDGenerator.onclick = () => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let text = '';

  for (let i = 0; i < 5; i++)
    text += charset.charAt(
      Math.floor(
        Math.random() * charset.length));

  generateOutputEntry(`ALTER ID: ${text}`);
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