class MyElement extends HTMLElement {
            constructor(name, image, price, description) {
                super();
                this.name = name;
                this.image = image;
                this.price = price;
                this.description = description;
            }
            
            connectedCallback() {
                this.innerHTML = `<img src="${this.image}" id="image">
        <p id="name">${this.name}</p>
        <p id="price">${this.price}</p>
        <p id="description>${this.description}</p>">`;
        }
    }
        customElements.define("product-page",MyElement);
        var ttl = `${this.name} за ${this.price}`;
        element.title = ttl;