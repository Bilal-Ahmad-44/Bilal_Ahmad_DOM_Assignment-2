// ============== Task 1 ===============

document.getElementById("heading").innerText = "DOM Element Selected by ID";

// ============== Task 2 ===============

const para = document.getElementsByTagName("p");
para[0].innerText = "First paragraph updated";

// ============== Task 3 ===============

const btn = document.getElementsByClassName("btn");
btn[1].innerText = "Click Me";

// ============== Task 4 ===============

const heading2 = document.querySelector("#heading-2");
heading2.style.color = "blue";

//  ============== Task 5 ===============

const li = document.querySelectorAll("li");
for (let l of li) {
  l.style.color = "green";
}

//  ============== Task 6 ===============

const para3 = document.getElementsByClassName("para-3");
para3[0].style.fontSize = "30px";
para3[0].style.color = "white";
para3[0].style.backgroundColor = "red";
