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
    //   .then(function (data) {
    //     const color = data.color;
    //     const $section = document.querySelector("#color");
    //     const list = [];
    //     for (const c in color) {
    //       const h3 = document.createElement("h3");
    //       const ul = document.createElement("ul");
    //       let number = 100;
    //       let combinedText = "";
    //       $section.appendChild(h3);
    //       $section.appendChild(ul);

    //       ul.classList.add("colorul");
    //       color[c].forEach((v) => {
    //         const li = document.createElement("li");
    //         const colordiv = document.createElement("div");
    //         const textdiv = document.createElement("div");
    //         const colortext = `var(--${c}-color-${number}) : ${v};
    //                 `;
    //         combinedText = combinedText + colortext;
    //         number = number + 100;
    //         ul.appendChild(li);
    //         li.appendChild(colordiv);
    //         li.appendChild(textdiv);
    //         colordiv.classList.add("colorpreview");
    //         colordiv.style.backgroundColor = `#${v}`;
    //         textdiv.classList.add("colorcode");
    //         textdiv.innerHTML = `#${v}`;
    //       });
    //       h3.innerHTML = `${c} list <span> Copy </span> <textarea class="verysmall" id="${c}">${combinedText}</textarea>`;
    //       h3.addEventListener("click", (e) => {
    //         const value = document.querySelector(`#${c}`);
    //         value.select();
    //         document.execCommand("copy");
    //         alert("복사되었습니다");
    //         console.log(value);
    //       });
    //     }
    //   });
  }
  mounted() {
  }
}
