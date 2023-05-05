$.getJSON("src/data/projects.json", function (data) {
  const cardsHtml = data
    .map(
      (item) => `
      <div class="card mb-4 text-bg-dark">
        <div class="card-header">
        <h5 class="card-title">${item.title}</h5>
        </div>
        <div class="card-body">
        <div class="mb-4">
        ${item.technology.split(', ').map(tech => `
        <button type="button" class="btn btn-outline-primary">${tech}</button>
        `).join('')}
        </div> 
          <p class="card-text">${item.description}</p>
          <button data-bs-toggle="modal" data-bs-target="#${
            item.PID
          }" class="btn btn-outline-primary px-5">More</button>
        </div>
      </div>
      <div class="modal fade" id="${item.PID}" tabindex="-1" aria-labelledby="${
        item.PID
      }Label" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${
                    item.PID
                    }Label">${item.title}</h1>
                    <button type="button" class="btn-close  btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"> 
                <h4>About This Projects :</h4>                   
                <p class="mb-4">${item.description}</p>
                <h4>Technology Used :</h4>
                <div class="mb-4">
                ${item.technology.split(', ').map(tech => `
                <button type="button" class="btn btn-primary">${tech}</button>
                `).join('')}
                </div>                   
                <h4>Screenshots :</h4>                   
                    <div id="carouselExampleIndicators${
                        item.PID
                        }" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                        ${item.images
                        .map(
                            (image, index) => `
                            <button type="button" data-bs-target="#carouselExampleIndicators${
                            item.PID
                            }" data-bs-slide-to="${index}" ${
                            index == 0
                                ? 'class="active" aria-current="true"'
                                : 'aria-label="Slide ' + (index + 1) + '"'
                            }></button>
                        `).join("")}
                        </div>
                        <div class="carousel-inner">
                            ${item.images
                            .map(
                                (image, index) => `
                                <div class="carousel-item ${index == 0 ? "active" : ""}">
                                    <img src="src/images/Projects/${
                                    item.PID
                                    }/${image}" class="d-block w-100" alt="${item.title} - Image ${
                                index + 1
                                }">
                                </div>
                            `).join("")}
                        </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${
                            item.PID
                            }" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${
                            item.PID
                            }" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  $("#projectsContainer").html(cardsHtml);
}).fail(function (error) {
  console.error(error);
});
