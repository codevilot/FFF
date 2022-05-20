import Component from "../core/Component.js";

export default class Nav extends Component {
  setup() {}
  template() {
    return `
    <h2>Page List</h2>
    <a href="#color">Color Palette</a>
    <a href="#shadow">Shadow Palette</a>
    <a href="#git">Git Commit Message Convention</a>
    <a href="#style">Style default</a>
    <a href="#favorite">Recommend Site FF</a>
    <a href="#motive">-Design Motivate</a>
    <a href="#svg">-SVG Site</a>
    `;
  }

  setEvent() {}
}
