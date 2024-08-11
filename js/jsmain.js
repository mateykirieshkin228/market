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
    </div>`;
            }
        }
        customElements.define("product-card",MyElement);