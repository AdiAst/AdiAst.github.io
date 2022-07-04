const data = {
  labels: [
    "Problems Solving",
    "Manipulate Data",
    "Machine Learning",
    "Designing",
    "Coding",
  ],
  datasets: [
    {
      label: "Skills",
      data: [90, 89, 87, 85, 89],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.9)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(190, 190, 190,0.8)",
        },
        grid: {
          color: "rgba(190, 190, 190,0.5)",
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
function pull(a) {
  document.getElementById("backres").style.display = "block";
  var result = document.getElementById("result");
  for (i = 0; i < 10; i++) {
    var ranres = Math.floor(Math.random() * 100);
    if (ranres == 1) {
      var ranreur = Math.floor(Math.random() * 3);
      if (ranreur == 1) {
        var itemsUR = document.createElement("img");
        itemsUR.setAttribute("src", "src/pic/ur.png");
        itemsUR.style.backgroundColor = "#1363DF";
        itemsUR.setAttribute("width", "100");
        itemsUR.setAttribute("height", "100");
        result.appendChild(itemsUR);
        sessionStorage.setItem("haveUR", "true");
      } else if (ranreur == 2) {
        var itemsUR = document.createElement("img");
        itemsUR.setAttribute("src", "src/pic/ur2.png");
        itemsUR.style.backgroundColor = "#1363DF";
        itemsUR.setAttribute("width", "100");
        itemsUR.setAttribute("height", "100");
        result.appendChild(itemsUR);
        sessionStorage.setItem("haveUR", "true");
      } else {
        var itemsUR = document.createElement("img");
        itemsUR.setAttribute("src", "src/pic/ur3.png");
        itemsUR.style.backgroundColor = "#1363DF";
        itemsUR.setAttribute("width", "100");
        itemsUR.setAttribute("height", "100");
        result.appendChild(itemsUR);
        sessionStorage.setItem("haveUR", "true");
      }
    } else if (ranres >= 2 && ranres <= 6) {
      var itemsSR = document.createElement("img");
      itemsSR.style.backgroundColor = "#F4E06D";
      itemsSR.setAttribute("src", "src/pic/sr.png");
      itemsSR.setAttribute("width", "100");
      itemsSR.setAttribute("height", "100");
      result.appendChild(itemsSR);
      sessionStorage.setItem("haveUR", "true");
    } else {
      var ranresr = Math.floor(Math.random() * 5);
      if (ranresr == 1) {
        var itemsR = document.createElement("img");
        itemsR.setAttribute("src", "src/pic/r.png");
        itemsR.style.backgroundColor = "#3F4E4F";
        itemsR.setAttribute("width", "100");
        itemsR.setAttribute("height", "100");
        result.appendChild(itemsR);
      } else if (ranresr == 2) {
        var itemsR2 = document.createElement("img");
        itemsR2.setAttribute("src", "src/pic/r2.png");
        itemsR2.style.backgroundColor = "#3F4E4F";
        itemsR2.setAttribute("width", "100");
        itemsR2.setAttribute("height", "100");
        result.appendChild(itemsR2);
      } else if (ranresr == 3) {
        var itemsR2 = document.createElement("img");
        itemsR2.setAttribute("src", "src/pic/r3.png");
        itemsR2.style.backgroundColor = "#3F4E4F";
        itemsR2.setAttribute("width", "100");
        itemsR2.setAttribute("height", "100");
        result.appendChild(itemsR2);
      } else if (ranresr == 4) {
        var itemsR2 = document.createElement("img");
        itemsR2.setAttribute("src", "src/pic/r4.png");
        itemsR2.style.backgroundColor = "#3F4E4F";
        itemsR2.setAttribute("width", "100");
        itemsR2.setAttribute("height", "100");
        result.appendChild(itemsR2);
      } else {
        var itemsR2 = document.createElement("img");
        itemsR2.setAttribute("src", "src/pic/r5.png");
        itemsR2.style.backgroundColor = "#3F4E4F";
        itemsR2.setAttribute("width", "100");
        itemsR2.setAttribute("height", "100");
        result.appendChild(itemsR2);
      }
    }
  }
}
function exit() {
  var res = document.getElementById("result");
  res.innerHTML = "";
  document.getElementById("backres").style.display = "none";
}
