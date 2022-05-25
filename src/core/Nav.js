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
    <div class="nav__list">
    <a class="git">Git Commit Convention</a>
    <a class="shadow">Shadow</a>
    </div>
    `;
  }
}
