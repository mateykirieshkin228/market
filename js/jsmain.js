class MyElement extends HTMLElement {
            constructor(name, image, price) {
                super();
                this.name = name;
                this.image = image;
                this.price = price;
            }
            
            connectedCallback() {
                this.innerHTML = `<div class="product">
        <img src="${this.image}" id="image">
        <p id="name">${this.name}</p>
        <p id="price">${this.price}</p>
    </div>`
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach((card, index) => {
            card.addEventListener('click', () => {
            if (index === 0) {window.open('products/firstprod.html', '_blank');}
        });
    });
}};
        customElements.define("product-card",MyElement);


//ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ