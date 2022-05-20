import Component from "../core/Component.js";

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
          <fieldset class="subject">
            <legend>Select Subject :</legend>
            <div class="fix">
              <input type="radio" id="fix" name="subject" value="fix" />
              <label for="fix">fix</label>
              <span class="title-desc">오작동 수정</span>
            </div>
            <div class="add">
              <input type="radio" id="add" name="subject" value="add" />
              <label for="add">add</label>
              <span class="title-desc">코드, 테스트, 예제, 문서 추가</span>
            </div>
            <div class="remove">
              <input type="radio" id="remove" name="subject" value="remove" />
              <label for="remove">remove</label>
              <span class="title-desc">코드의 삭제</span>
            </div>
            <div class="improve">
              <input type="radio" id="improve" name="subject" value="improve" />
              <label for="improve">improve</label>
              <span class="title-desc"
                >호환성, 성능, 검증 기능, 접근성 향상</span
              >
            </div>
            <div class="implement">
              <input
                type="radio"
                id="implement"
                name="subject"
                value="implement"
              />
              <label for="implement">implement</label>
              <span class="title-desc">코드가 이전보다 구현체 완성</span>
            </div>
            <div class="refactor">
              <input
                type="radio"
                id="refactor"
                name="subject"
                value="refactor"
              />
              <label for="refactor">refactor</label>
              <span class="title-desc">코드 전면 수정</span>
            </div>
            <div class="move">
              <input type="radio" id="move" name="subject" value="move" />
              <label for="move">move</label>
              <span class="title-desc">코드의 이동</span>
            </div>
            <div class="rename">
              <input type="radio" id="rename" name="subject" value="rename" />
              <label for="rename">rename</label>
              <span class="title-desc">이름 변경</span>
            </div>
            <div class="update">
              <input type="radio" id="update" name="subject" value="update" />
              <label for="update">update</label>
              <span class="title-desc">개정이나 업데이트</span>
            </div>
          </fieldset>
          <fieldset class="result__wrap">
            <legend>Result :</legend>
            <textarea id="gitRes"></textarea>
            <button>Copy</button>
          </fieldset>
        </div>
    `;
  }

  setEvent() {
    const fieldset = this.$target.querySelector(".git__wrap");
    // const type = document.querySelector(".type");
    // const subject = document.querySelector(".subject");
    const gitObj = new Map();
    fieldset.addEventListener("click", (e) => {
      if (e.target.id.length !== 0) {
        const idE = e.target.id;
        const nameE = e.target.name;
        gitObj.set(nameE, idE);
        let result = document.querySelector("#gitRes");
        if (gitObj.size === 2) {
          result.innerHTML = `${gitObj.get("type")}:${gitObj.get("subject")} `;
        }
      }
    });
  }
}
