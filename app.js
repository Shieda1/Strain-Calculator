// https://calculator.swiftutors.com/strain-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const strainRadio = document.getElementById('strainRadio');
const changeinDimensionRadio = document.getElementById('changeinDimensionRadio');
const originalLengthRadio = document.getElementById('originalLengthRadio');

let strain;
let changeinDimension = v1;
let originalLength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

strainRadio.addEventListener('click', function() {
  variable1.textContent = '(x) Change in Dimension (m)';
  variable2.textContent = '(L) Original Length (m)';
  changeinDimension = v1;
  originalLength = v2;
  result.textContent = '';
});

changeinDimensionRadio.addEventListener('click', function() {
  variable1.textContent = '(S) Strain';
  variable2.textContent = '(L) Original Length (m)';
  strain = v1;
  originalLength = v2;
  result.textContent = '';
});

originalLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(S) Strain';
  variable2.textContent = '(x) Change in Dimension (m)';
  strain = v1;
  changeinDimension = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(strainRadio.checked)
    result.textContent = `Strain = ${computeStrain().toFixed(2)}`;

  else if(changeinDimensionRadio.checked)
    result.textContent = `Change in Dimension = ${computeChangeinDimension().toFixed(2)} m`;

  else if(originalLengthRadio.checked)
    result.textContent = `Original Length = ${computeOriginalLength().toFixed(2)} m`;
})

// calculation

function computeStrain() {
  return Number(changeinDimension.value) / Number(originalLength.value);
}

function computeChangeinDimension() {
  return Number(strain.value) * Number(originalLength.value);
}

function computeOriginalLength() {
  return Number(changeinDimension.value) / Number(strain.value);
}