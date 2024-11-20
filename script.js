const addButton = document.querySelector('button');

const addRow = function () {
    const table = document.querySelector('article table');
    const tr = document.createElement('tr');

    const fields = document.getElementsByTagName('input');
    const numberCols = fields.length;

    for (let i = 0; i < numberCols; i++) {
        let td = document.createElement('td');
        td.textContent = fields[i].value;
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