
fetch("https://randomuser.me/api/?results=5").then((data) => {
    return data.json();
}).then((objectData) =>{
    console.log(objectData);
    let tableData="";
    var row = 1;
    objectData.results.map((values)=>{
        tableData+=`<tr>
        <th scope="row">${row}</th>
        <td>${values.name.first}</td>
        <td>${values.location.city}</td>
      </tr>`;
      row++;
    })
    document.getElementById("table_body").innerHTML=tableData;
})