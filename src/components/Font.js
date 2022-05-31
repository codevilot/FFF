import Component from "../core/Component.js";

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
                console.log(res)
                return res.json();
            }).then(function (data) {
                const font = data.font;
                const $wrap = document.querySelector(".font__wrap")
                const list = [];
                console.log(data)
                for (const s in font) {
                    const li = document.createElement("li");
                    $wrap.appendChild(li);
                    li.innerHTML = `${s}`
                    li.classList.add("font__div")
                    li.style = font[s]
                }
            })

        const fontWrap = document.querySelector(".font__wrap")
        fontWrap.addEventListener("click", (e) => {
            const fontValue = window.getComputedStyle(e.target).getPropertyValue("box-font")
            clickToCopy(`box-shadow:${shadowValue}`)
        });
    }
}
