import Component from "../core/Component.js";

export default class Nav extends Component {
  setup() {
    this.$state = {
      category: "git",
    };
  }
  template() {
    return `
    <h2 class="pageList">Page List</h2>
    <a class="shadow">Shadow Palette</a>
    <a class="git">Git Commit Message Convention</a>

    `;
  }
}
