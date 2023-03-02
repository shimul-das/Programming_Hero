//Triangle Calculation
let serial = 0;
let areaSection = document.getElementById('Calculate-area');


//first card Triangle
document.getElementById('first-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let a = getInputValueById('input-1');
    let b = getInputValueById('input-2');
    let c = title('first-name');
    let triangle_area = Triangle_Rhombus_Pentagon(a, b);
    noCell.innerHTML = serial;
    nameCell.innerHTML = c;
    totalCell.innerHTML = `${triangle_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

})
//4th card Rhombus
//end

//Ellipse Calculation
document.getElementById('sixth-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let pCardName = document.getElementById("sixth-name").innerText;
    let a = document.getElementById('input-11').value;
    let b = document.getElementById('input-12').value;

    const a_number = parseInt(a);

    const b_number = parseInt(b);
    let ellipse_area = (3.1416 * a_number * b_number).toFixed(2);
    noCell.innerHTML = serial;
    nameCell.innerHTML = pCardName;
    totalCell.innerHTML = `${ellipse_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

});

//function 1 for Rectangle and parallelogram
document.getElementById('second-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let a = getInputValueById('input-3');
    let b = getInputValueById('input-4');
    let c = title('second-name');
    let rectangle_area = Rectangle_Parallelogram(a, b);
    noCell.innerHTML = serial;
    nameCell.innerHTML = c;
    totalCell.innerHTML = `${rectangle_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

})

//third card Parallelogram
document.getElementById('third-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let a = getInputValueById('input-5');
    let b = getInputValueById('input-6');
    let c = title('third-name');
    let parallelogram_area = Rectangle_Parallelogram(a, b);
    noCell.innerHTML = serial;
    nameCell.innerHTML = c;
    totalCell.innerHTML = `${parallelogram_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

});

//first card Pentagon
document.getElementById('fifth-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let a = getInputValueById('input-9');
    let b = getInputValueById('input-10');
    let c = title('fifth-name');
    let pentagon_area = Triangle_Rhombus_Pentagon(a,b);
    noCell.innerHTML = serial;
    nameCell.innerHTML = c;
    totalCell.innerHTML = `${pentagon_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

});

//Rhombus Calculation
document.getElementById('fourth-card').addEventListener('click', function () {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    const noCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const totalCell = document.createElement("td");
    const btnCell = document.createElement("button");
    btnCell.classList.add("btn");
    btnCell.classList.add("btn-info");
    serial += 1;
    let pCardName = document.getElementById("fourth_name").innerText;
    let a = document.getElementById('r_one').innerText
    let b = document.getElementById('r_two').innerText;

    const a_number = parseInt(a);

    const b_number = parseInt(b);
    let rhombus_area = (0.5 * a_number * b_number).toFixed(2);
    noCell.innerHTML = serial;
    nameCell.innerHTML = pCardName;
    totalCell.innerHTML = `${rhombus_area} cm<sup>2`;
    btnCell.innerHTML = "convert me m<sup>2";
    newRow.appendChild(noCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(totalCell);
    newRow.appendChild(btnCell);

    tableBody.appendChild(newRow);

});