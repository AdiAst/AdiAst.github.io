$.getJSON("src/data/projects.json", function (data) {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  let currentPage = 1;
  
  renderPage(currentPage, data, itemsPerPage);
  
  $(".pagination").on("click", ".page-link", function (event) {
    event.preventDefault();
    const targetPage = parseInt($(this).data("page"));
    
    if (!isNaN(targetPage) && targetPage >= 1 && targetPage <= totalPages && targetPage !== currentPage) {
      currentPage = targetPage;
      renderPage(currentPage, data, itemsPerPage);
    }
  });
  
  function renderPage(page, data, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);
    
    const cardsHtml = pageData.map(renderCardHtml).join("");
    $("#projectsContainer").html(cardsHtml);
    
    renderPagination(page, totalPages);
  }
  
  function renderPagination(currentPage, totalPages) {
    let paginationHtml = `
      <nav aria-label="Page navigation example">
        <ul class="pagination">
    `;
    
    // Previous page
    paginationHtml += `
      <li class="page-item${currentPage === 1 ? ' disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>
      </li>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `
        <li class="page-item${i === currentPage ? ' active' : ''}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }
    
    // Next page
    paginationHtml += `
      <li class="page-item${currentPage === totalPages ? ' disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>
      </li>
    `;
    
    paginationHtml += `
        </ul>
      </nav>
    `;
    
    $(".pagination").html(paginationHtml);
  }
}).fail(function (error) {
  console.error(error);
});


function renderCardHtml(item) {
  const cardHeaderHtml = `
    <div class="card-header">
      <h5 class="card-title">${item.title}</h5>
    </div>
  `;

  const technologyButtonsHtml = item.technology
    .split(", ")
    .map((tech) => `<button type="button" class="btn btn-outline-primary me-1">${tech}</button>`)
    .join("");

  const cardBodyHtml = `
    <div class="card-body projects-description">
      <div class="mb-4">
        ${technologyButtonsHtml}
      </div>
      <p class="card-text">${item.description}</p>
      </div>
      <div class="card-footer text-muted p-3">
        <button data-bs-toggle="modal" data-bs-target="#${item.PID}" class="btn btn-outline-primary px-5">More</button>
      </div>
  `;

  const modalHtml = `
    <div class="modal fade" id="${item.PID}" tabindex="-1" aria-labelledby="${item.PID}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${item.PID}Label">${item.title}</h1>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h4>About This Project:</h4>
            <p class="mb-4">${item.description}</p>
            <h4>Technology Used:</h4>
            <div class="mb-4">
              ${technologyButtonsHtml}
            </div>
            <h4>Screenshots:</h4>
            <div id="carouselExampleIndicators${item.PID}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                ${renderCarouselIndicators(item)}
              </div>
              <div class="carousel-inner">
                ${renderCarouselItems(item)}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${item.PID}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${item.PID}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return `
    <div class="card mb-4 text-bg-dark">
      ${cardHeaderHtml}
      ${cardBodyHtml}
    </div>
    ${modalHtml}
    `;
}
function renderCarouselIndicators(item) {
  return item.images
    .map((_, index) => {
      const isActive = index === 0;
      const ariaLabel = isActive ? `class="active" aria-current="true"` : ` aria-label="Slide ${index + 1}"`;
      return `<button type="button" data-bs-target="#carouselExampleIndicators${item.PID}" data-bs-slide-to="${index}" ${ariaLabel}></button>`;
    })
    .join("");
}

function renderCarouselItems(item) {
  return item.images
    .map((image, index) => {
      const isActive = index === 0;
      return `<div class="carousel-item ${isActive ? "active" : ""}"> <img src="src/images/Projects/${item.PID}/${image}" class="d-block w-100" alt="${item.title} - Image ${index + 1}"> </div>`;
    })
    .join("");
}

