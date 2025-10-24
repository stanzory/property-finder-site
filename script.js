// Simple sample data (this will later come from Google Sheets)
const properties = [
  {
    title: "2-Bedroom Apartment in Harrisburg",
    price: "$950/mo",
    description: "Clean unit near downtown.",
    image: "https://via.placeholder.com/400x250?text=House+1"
  },
  {
    title: "Fix & Flip in Pittsburgh",
    price: "$60,000",
    description: "Great investment property needing renovation.",
    image: "https://via.placeholder.com/400x250?text=House+2"
  }
];

// Display properties
const propertyList = document.getElementById("property-list");
propertyList.innerHTML = "";

properties.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("property-card");
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.price}</p>
    <p>${p.description}</p>
  `;
  propertyList.appendChild(card);
});

