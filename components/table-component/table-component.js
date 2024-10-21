new gridjs.Grid({
  columns: ["Acronym", "Definition"],
  data: [
    ["SGH", "Singapore General Hospital"],
    ["CGH", "Changi General Hospital"],
    ["ESD", "Endoscopic Submucosal Dissection"],
    ["EMR", "Endoscopic Mucosal Resection"],
    ["ESR", "Endoscopic Submucosal Resection"],
    ["EFTR", "Endoscopic Full Thickness Resection"],
    ["FTRD", "Full Thickness Resection Device"],
  ],
}).render(document.getElementById("table-1"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
