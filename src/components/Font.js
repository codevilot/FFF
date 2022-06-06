import Component from "../core/Component.js";
import { createSelector, clickToCopy } from "../core/Function.js";
export default class Font extends Component {
    setup() {
        // this.$state = { items: ["item1", "item2"] };
    }
    template() {
        // const { items } = this.$state;
        return `
        <h2>Font</h2>
        <ul class="font__wrap">
        </ul>
     
    `;
    }

    setEvent() {
        fetch("./src/font.json")
            .then(function (res) {
                return res.json();
            }).then(function (data) {

                const head = document.querySelector("head")
                const style = createSelector("style", head)
                const font = data.font;
                const $wrap = document.querySelector(".font__wrap")

                let fontList = ""
                for (const s in font) {
                    const li = createSelector("li", $wrap, "font__div")
                    const div = createSelector("div", li, "font__name")
                    const h3 = createSelector("h3", div, "font__sample")
                    const button = createSelector("button", div, "font__copy")
                    const textarea = createSelector("textarea", li, "font__test")

                    h3.style.fontFamily = `"${s}"`
                    h3.innerHTML = `${font[s].name}`
                    button.innerHTML = "copy"
                    textarea.style.fontFamily = `"${s}`
                    textarea.innerHTML = "텍스트를 테스트해보세요"
                    fontList += font[s].url
                }
                style.innerHTML = fontList
            })

        const fontWrap = document.querySelector(".font__wrap")
        fontWrap.addEventListener("click", (e) => {
            if (e.target.classList[0] === "font__copy") {
                console.log(e.target.classList[0])
                const fontValue = window.getComputedStyle(e.target.parentElement.querySelector(".font__sample")).getPropertyValue("font-family")
                clickToCopy(`font-family:${fontValue}`)
            }
        });
    }
}
