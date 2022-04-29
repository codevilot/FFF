fetch("./src/color.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        const color = data.color;
        const $section = document.querySelector('#color');
        const list = []
        for (const c in color) {
            const h3 = document.createElement('h3');
            const ul = document.createElement('ul');
            let number = 100;
            let combinedText = "";
            $section.appendChild(h3);
            $section.appendChild(ul);

            ul.classList.add('colorul')
            color[c].forEach((v) => {
                const li = document.createElement('li');
                const colordiv = document.createElement('div');
                const textdiv = document.createElement('div');
                const colortext = `--${c}-color-${number} : #${v};
                `

                combinedText = combinedText + colortext;
                number = number + 100;
                ul.appendChild(li);
                li.appendChild(colordiv);
                li.appendChild(textdiv);

                colordiv.classList.add('colorpreview')
                colordiv.style.backgroundColor = `#${v}`;

                textdiv.classList.add('colorcode')
                textdiv.innerHTML = `#${v}`
            })
            h3.innerHTML = `${c} list <span> Copy </span> <textarea class="verysmall" id="${c}">${combinedText}</textarea>`
            h3.addEventListener("click", e => {
                const value = document.querySelector(`#${c}`)
                value.select();
                document.execCommand("copy");
                alert("복사되었습니다");
                console.log(value)
            })

        }
    })
