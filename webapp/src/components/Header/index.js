import Component from "../../core/Component";
import "./style";
export default class Header extends Component {
  template() {
    return `
      <div class="first-row">
        <div class="container">
        <span class="logo">ZUM 허브</span>
        <button class="bookmark">즐겨찾기</button>
        </div>
      </div>
      <nav class="second-row">
        <ul class="button-list">
          <li>
            <button route="/content/life">라이프</button>
          </li>
          <li>
            <button route="/content/food">푸드</button>
          </li>
          <li>
            <button route="/content/travel">여행</button>
          </li>
          <li>
            <button route="/content/culture">컬쳐</button>
          </li>
        </ul>
      </nav>
      `;
  }
}
