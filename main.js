function set() {
  let n = document.getElementById("name").value;
  let x = document.getElementById("link").value;
  if (n == "" || x == "") {
    alert("fill textbox");
  } else {
    let z = document.getElementById("table").innerHTML;
    z += `<tr>
        <td class="tdd"></td>
        <td><a href="${x}">${n}</a></td>
        <td>${x}</td>
        <td><button onclick="del()">delete</button></td>
    </tr>`;
    document.getElementById("table").innerHTML = z;
    document.getElementById("name").value = "";
    document.getElementById("link").value = "";
  }
}

function del() {
  let btn = window.event.target;
  btn.parentElement.parentElement.remove();
  document.getElementById("table").innerHTML =
    document.getElementById("table").innerHTML;
}
