import { createSelector } from "./core/Function.js";
import Git from "./components/Git.js";
import Nav from "./core/Nav.js";
import Component from "./core/Component.js";
import Shadow from "./components/Shadow.js";
import Font from "./components/Font.js"
// fetch("./src/color.json")
//   .then(function (res) {
//     return res.json();
//   })
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
// const fieldset = document.querySelector(".git__wrap");
// const type = document.querySelector(".type");
// const subject = document.querySelector(".subject");
// const gitObj = new Map();
// fieldset.addEventListener("click", (e) => {
//   if (e.target.id.length !== 0) {
//     const idE = e.target.id;
//     const nameE = e.target.name;
//     gitObj.set(nameE, idE);
//     let result = document.querySelector("#gitRes");
//     if (gitObj.size === 2) {
//       result.innerHTML = `${gitObj.get("type")}:${gitObj.get("subject")} `;
//     }
//   }
// });
export default class App extends Component {
  setup() { }
  template() {
    return `

    `;
  }
  setEvent() {
    const $Nav = createSelector("div", this.$target, "Nav");
    const $content = createSelector("div", this.$target, "Git");
    new Nav($Nav);
    new Git($content);
    this.$target.addEventListener("click", (e) => {
      if (e.target.parentElement.classList[0] === "nav__list") {
        const className = e.target.classList[0];
        this.$target.querySelector(".pageList").innerHTML = className;
        if (className === "git") return new Git($content);
        if (className === "shadow") return new Shadow($content);
        if (className === "font") return new Font($content);
      }
    });
  }
}
