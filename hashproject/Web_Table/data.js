let employees = [
    {id:101, name: "Sumant", sal:45000},
    {id:102, name: "Rahul", sal:45000},
    {id:103, name: "Soni", sal:45000},
    {id:104, name: "Sima", sal:85000}
];
function display(){
    let tbody = document.getElementById("table_body");
    let rows = "";
    employees.forEach((emp)=>{
        rows = 
        rows + `<tr> <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
        </tr>`
    });
    tbody.innerHTML = rows;
}