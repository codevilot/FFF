import Component from "../core/Component.js";
import { createSelector } from "../core/Function.js";
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
                    const h3 = createSelector("h3", li, "font__sample")
                    const textarea = createSelector("textarea", $wrap, "font__test")
                    h3.style.fontFamily = font[s]
                    h3.innerHTML = `${s}`
                    fontList += font[s]
                    console.log(font[s])
                }
                style.innerHTML = fontList
            })

        const fontWrap = document.querySelector(".font__wrap")
        fontWrap.addEventListener("click", (e) => {
            const fontValue = window.getComputedStyle(e.target).getPropertyValue("box-font")
            clickToCopy(`box-shadow:${shadowValue}`)
        });
    }
}
