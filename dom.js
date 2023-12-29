document.getElementById('button').addEventListener('click', function () {
    alert('¡Button clicked!');
});

document.getElementById('paragraph').innerHTML = '¡Lucas is watching a movie now!';

function toggleVisibility() {
    var element = document.getElementById('hiddenParagraph');
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}

var namesArray = ["John", "Mary", "Peter", "Anna", "Carlos", "Laura", "Miguel", "Elena", "David", "Isabel"];

function printNamesList() {
    var list = document.getElementById('namesList');
    namesArray.forEach(function (name) {
        var listItem = document.createElement('li');
        listItem.textContent = name;
        list.appendChild(listItem);
    });
}

printNamesList();

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printNumbersCount() {
    document.getElementById('numbersCount').textContent = 'The array has ' + numbersArray.length + ' numbers.';
}

printNumbersCount();

var objectsArray = [
    { id: 1, name: 'Mia', status: 'Active', species: 'Cat', type: 'Persian', gender: 'Female' },
    { id: 2, name: 'Coco', status: 'Active', species: 'Dog', type: 'Border Collie', gender: 'Female' },
    { id: 3, name: 'Lia', status: 'Dead', species: 'Cat', type: 'Persian', gender: 'Female' },
    { id: 4, name: 'Lisa', status: 'Dead', species: 'Dog', type: 'Yorkshire', gender: 'Female' },
    { id: 5, name: 'Corcho', status: 'Active', species: 'Dog', type: 'Unknown', gender: 'Male' },
    { id: 6, name: 'Miel', status: 'Active', species: 'Dog', type: 'Labrador', gender: 'Male' },
    { id: 7, name: 'Pompón', status: 'Active', species: 'Cat', type: 'European', gender: 'Male' },
    { id: 8, name: 'Chicho', status: 'Active', species: 'Dog', type: 'Caniche', gender: 'Male' },
    { id: 9, name: 'Gus', status: 'Dead', species: 'Hamster', type: 'Unknown', gender: 'Male' },
    { id: 10, name: 'Meemi', status: 'Active', species: 'Bird', type: 'Robot', gender: 'Female' },
];

function createFormNodes() {
    var formContainer = document.getElementById('formContainer');
    var form = document.createElement('form');

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter text';
    form.appendChild(input);

    formContainer.appendChild(form);
}

createFormNodes();

function createTableNodes() {
    var table = document.getElementById('objectsTable');

    objectsArray.forEach(function(object) {
      var row = table.insertRow(-1);

      for (var key in object) {
        var cell = row.insertCell();
        cell.textContent = object[key];
      }
    });
  }

  createTableNodes();
