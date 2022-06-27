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
      var itemsUR = document.createElement("img");
      itemsUR.setAttribute("src", "pic/ur.png");
      itemsUR.setAttribute("width", "100");
      itemsUR.setAttribute("height", "100");
      result.appendChild(itemsUR);
      sessionStorage.setItem("haveUR", "true");
    } else if (ranres >= 2 && ranres <= 50) {
      var itemsSR = document.createElement("img");
      itemsSR.setAttribute("src", "pic/sr.png");
      itemsSR.setAttribute("width", "100");
      itemsSR.setAttribute("height", "100");
      result.appendChild(itemsSR);
      sessionStorage.setItem("haveUR", "true");
    } else {
      var ranresr = Math.floor(Math.random() * 2);
      if (ranresr == 1) {
        var itemsR = document.createElement("img");
        itemsR.setAttribute("src", "pic/r.png");
        itemsR.setAttribute("width", "100");
        itemsR.setAttribute("height", "100");
        result.appendChild(itemsR);
      } else {
        var itemsR2 = document.createElement("img");
        itemsR2.setAttribute("src", "pic/r2.png");
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
