// Classe pour le produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe pour un élément du panier
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total d'un élément
    calculateTotal() {
        return this.product.price * this.quantity;
    }
}

// Classe pour le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
        // Vérifie si le produit existe déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotal() {
        return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`Produit: ${item.product.name}, Quantité: ${item.quantity}, Total: ${item.calculateTotal().toFixed(2)}€`);
        });
    }
}

// Tests
// Création de produits
const product1 = new Product(1, "Pomme", 1.5);
const product2 = new Product(2, "Banane", 2.0);
const product3 = new Product(3, "Orange", 1.2);

// Création d'un panier d'achat
const cart = new ShoppingCart();

// Ajout d'éléments au panier
cart.addItem(product1, 3); // 3 pommes
cart.addItem(product2, 2); // 2 bananes
cart.addItem(product3, 5); // 5 oranges
cart.addItem(product1, 2); // 2 pommes supplémentaires

// Affichage du panier
console.log("Contenu du panier:");
cart.displayItems();

// Total du panier
console.log(`Total: ${cart.getTotal().toFixed(2)}€`);

// Suppression d'un élément
cart.removeItem(2); // Suppression des bananes

// Affichage après suppression
console.log("\nContenu du panier après suppression:");
cart.displayItems();

// Total après suppression
console.log(`Total après suppression: ${cart.getTotal().toFixed(2)}€`);
