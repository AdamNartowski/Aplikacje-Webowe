const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

let originalProducts = [];
let displayProducts = [];

async function loadData() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Nie udało się pobrać danych: ${res.status}");
    }

    const data = await res.json();

    originalProducts = data.products.slice(0, 30);
    displayProducts = [...originalProducts];

    renderTable();
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    alert("Nie udało się pobrać danych z API.");
  }
}

function renderTable() {
  const rows = displayProducts.map(
    (product) => `
        <tr>
            <td><img src="${product.thumbnail}" alt="img"></td>
            <td>${product.title}</td>
            <td>${product.description}</td>
        </tr>
    `
  );

  tableBody.innerHTML = rows.join("");
}

function applyFilters() {
  const phrase = searchInput.value.toLowerCase();

  displayProducts = [];
  originalProducts.forEach((product) => {
    if (
      product.title.toLowerCase().includes(phrase) ||
      product.description.toLowerCase().includes(phrase)
    ) {
      displayProducts.push(product);
    }
  });

  const sort = sortSelect.value;
  if (sort === "asc") {
    displayProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "desc") {
    displayProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  renderTable();
}

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);

loadData();
