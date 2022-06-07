import Component from "../core/Component.js";
import { alertCopy } from "../core/Function.js";
export default class Git extends Component {
  setup() {
    // this.$state = { items: ["item1", "item2"] };
  }
  template() {
    // const { items } = this.$state;
    return `

        <h2>Git Commit Message Convention</h2>
        <div class="git__wrap">
          <fieldset class="type">
            <legend>Select type :</legend>
            <div class="feat">
              <input type="radio" id="feat" name="type" value="feat" />
              <label for="feat">feat</label>
              <span class="type-desc">새로운 기능 추가</span>
            </div>
            <div class="fix">
              <input type="radio" id="fix" name="type" value="fix" />
              <label for="fix">fix</label>
              <span class="type-desc">버그 픽스</span>
            </div>
            <div class="docs">
              <input type="radio" id="docs" name="type" value="docs" />
              <label for="docs">docs</label>
              <span class="type-desc">문서 수정</span>
            </div>
            <div class="style">
              <input type="radio" id="style" name="type" value="style" />
              <label for="style">style</label>
              <span class="type-desc">포멧, 세미콜론, import 수정</span>
            </div>
            <div class="refactor">
              <input type="radio" id="refactor" name="type" value="refactor" />
              <label for="refactor">refactor</label>
              <span class="type-desc">코드 리펙토링</span>
            </div>
            <div class="test">
              <input type="radio" id="test" name="type" value="test" />
              <label for="test">test</label>
              <span class="type-desc">테스트 코드 추가</span>
            </div>
            <div class="chore">
              <input type="radio" id="chore" name="type" value="chore" />
              <label for="chore">chore</label>
              <span class="type-desc">빌드 업무 수정</span>
            </div>
          </fieldset>
          
          <fieldset class="result__wrap">
            <legend>Result :<span class="git__copy">copy</span></legend>
            <textarea id="gitRes"></textarea>
          </fieldset>
        </div>
    `;
  }

  setEvent() {
    const type = this.$target.querySelector(".type");
    const gitObj = new Map();
    const copy = this.$target.querySelector(".git__copy");
    type.addEventListener("click", (e) => {
      if (
        e.target.id.length !== 0 &&
        e.target.parentElement.parentElement.classList[0] === "type"
      ) {
        const idE = e.target.id;
        const nameE = e.target.name;
        gitObj.set(nameE, idE);
        let result = document.querySelector("#gitRes");
        result.innerHTML = `${gitObj.get("type")}:`;
      }
    });
    copy.addEventListener("click", (e) => {
      const value =
        e.target.parentElement.parentElement.querySelector("#gitRes");
      value.select();
      document.execCommand("copy");
      alertCopy();
    });
  }
}
