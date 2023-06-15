class HeroWrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <div class="hero d-flex">
      <div class="hero-body">
        <h1 class="text-title ">Lorem ipsum dolor <span>sit amet.</span></h1>
        <p class="text-hero color-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias minus facere laborum harum atque quae ea magni doloribus voluptates.</p>
        <button class="btn-primary">Lihat Sekarang</button>
      </div>
    </div>
  `;
  }
}

customElements.define('hero-wrapper', HeroWrapper);
