class MyElement extends HTMLElement {
            constructor(name, image, price, url = null) {
                super();
                this.name = name;
                this.image = image;
                this.price = price;
                this.url = url;
            }
            
            connectedCallback() {
                this.innerHTML = `<img src="${this.image}" id="image">
        <p id="name">${this.name}</p>
        <p id="price">${this.price}</p>`;
                this.addEventListener('click', function(event) {
                    if (this.url) window.open(this.url);
                })
            }
}
        customElements.define("product-card",MyElement);


//ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ