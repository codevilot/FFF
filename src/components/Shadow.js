import Component from "../core/Component.js";
import { clickToCopy } from "../core/Function.js"
export default class Git extends Component {
  setup() {
    // this.$state = { items: ["item1", "item2"] };
  }
  template() {
    // const { items } = this.$state;
    return `
    <h2>Shadow</h2>
    <ul class="shadow__wrap">
    </ul>
    `;
  }

  setEvent() {
    fetch("./src/shadow.json")
      .then(function (res) {
        console.log(res)
        return res.json();
      }).then(function (data) {
        const shadow = data.shadow;
        const $wrap = document.querySelector(".shadow__wrap")
        const list = [];
        console.log(data)
        for (const s in shadow) {
          const li = document.createElement("li");
          $wrap.appendChild(li);
          li.innerHTML = `${s}`
          li.classList.add("shadow__div")
          li.style = shadow[s]
        }
      })

    const shadowWrap = document.querySelector(".shadow__wrap")
    shadowWrap.addEventListener("click", (e) => {
      const shadowValue = window.getComputedStyle(e.target).getPropertyValue("box-shadow")
      clickToCopy(`box-shadow:${shadowValue}`)
    });
  }
  mounted() {
  }
}
