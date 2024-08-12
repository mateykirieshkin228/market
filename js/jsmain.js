class MyElement extends HTMLElement {
            constructor(name, image, price, number) {
                super();
                this.name = name;
                this.image = image;
                this.price = price;
                this.number = number;
            }
            
            connectedCallback() {
                this.innerHTML = `<div onclick.window.open(${this.number}.html) class="product">
        <img src="${this.image}" id="image">
        <p id="name">${this.name}</p>
        <p id="price">${this.price}</p>
    </div>`;
            }
        }
        customElements.define("product-card",MyElement);


//ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ