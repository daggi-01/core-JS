class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCollback() {
    console.log('탄생함');
  }
  disconnectedCallback() {
    console.log('죽음');
  }
}

customElements.define('c-elemnent', MyElement);

const elem = document.createElement('c-element');
const app = document.getElementById('app');

app.appendChild(elem);
