const addButton = document.querySelector('button');

const addRow = function () {
    const table = document.querySelector('article table tbody');
    const tr = document.createElement('tr');

    const fieldsOpen = document.getElementsByTagName('input');
    const fieldsSelection = document.getElementsByTagName('select');
    const numberOpenCols = fieldsOpen.length;
    const numberSelectionCols = fieldsSelection.length;

    for (let i = 0; i < numberOpenCols; i++) {
        let td = document.createElement('td');

        td.textContent = fieldsOpen[i].value;
        tr.appendChild(td);
    }

    for (let i = 0; i < numberSelectionCols; i++) {
        let td = document.createElement('td');

        td.textContent = fieldsSelection[i].options[fieldsSelection[i].selectedIndex].text;
        tr.appendChild(td);
    }

    const buttonExclude = document.createElement('button');


    buttonExclude.textContent = 'Remove';
    buttonExclude.addEventListener('click', () => { tr.remove(); });

    const tdLast = document.createElement('td');
    tdLast.appendChild(buttonExclude);

    tr.appendChild(tdLast);
    table.appendChild(tr);
}

addButton.addEventListener('click', addRow);

const table = document.querySelector('article table thead');
const tr = document.createElement('tr');

const fieldsOpen = document.getElementsByTagName('input');
const fieldsSelection = document.getElementsByTagName('select');
const numberOpenCols = fieldsOpen.length;
const numberSelectionCols = fieldsSelection.length;

for (let i = 0; i < numberOpenCols; i++) {
    let th = document.createElement('th');
    th.textContent = fieldsOpen[i].name;
    tr.appendChild(th);
}

for (let i = 0; i < numberSelectionCols; i++) {
    let th = document.createElement('th');
    th.textContent = fieldsSelection[i].name;
    tr.appendChild(th);
}

let th = document.createElement('th');
th.textContent = '';
tr.appendChild(th);

table.appendChild(tr);
