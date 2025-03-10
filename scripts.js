document.addEventListener("DOMContentLoaded", function () {
    console.log("Scripts loaded successfully");

    // Load products dynamically (mock data for now)
    const productList = document.getElementById("product-list");
    if (productList) {
        const products = [
            { name: "Green Tea", price: "$10.99", image: "greentea.jpg" },
            { name: "Black Tea", price: "$12.49", image: "blacktea.jpg" },
            { name: "Lemon Tea", price: "$9.99", image: "lemontea.jpg" },
            { name: "Oolong Tea", price: "$14.99", image: "oolongtea.jpg" },
            { name: "Matcha Powder", price: "$18.99", image: "matchapowder.jpg" }
        ];

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4");
            productCard.innerHTML = `
                <div class="product-card text-center">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    // Form Submission for Adding Products (Basic Handling)
    const productForm = document.querySelector("form");
    if (productForm) {
        productForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Product saved successfully!");
        });
    }
});
