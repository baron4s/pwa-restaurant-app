class ErrorLoad extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error-load">
          <p>Halaman tidak dapat dimuat, cek koneksi internetmu😞</p>
        </div>
  `;
  }
}

customElements.define('error-load', ErrorLoad);
