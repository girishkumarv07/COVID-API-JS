let fetch = async () => {
  let payload = await window.fetch("https://data.covid19india.org/data.json");
  console.log(payload);
  let final = await payload.json();
  console.log(final);
  let newdata = final.statewise;
//   console.log(newdata);

  let tab = document.getElementById("table");
  let table1 = document.createElement("table");

  table1.style.border = "1px solid black";
  table1.style.borderCollapse = "collapse";

  for (let header in newdata[0]) {
    // console.log(header);
    let th = document.createElement("th");
    th.textContent = header;
    th.style.border = "1px solid black";
    th.style.padding = "15px";
    tab.appendChild(table1).appendChild(th);
  }

  newdata.map(e => {
    // console.log(e);
    let tr = document.createElement("tr");
    for (let data in e) {
    //   console.log(e[data]);
      let td = document.createElement("td");

      td.style.border = "1px solid black";
      td.style.padding = "8px";

      td.textContent = e[data];
      tab.appendChild(table1).appendChild(tr).appendChild(td);
    }
    // let tr = document.createElement("tr");
    // let active = document.createElement("td");
    // active.textContent = e.active;
    // let confirmed = document.createElement("td");
    // confirmed.textContent = e.confirmed;
    // tab.appendChild(table1).appendChild(tr).appendChild(active);
    // tab.appendChild(table1).appendChild(tr).appendChild(confirmed);
    // console.log(a);
  });
  // console.log(table1);
};

fetch();
