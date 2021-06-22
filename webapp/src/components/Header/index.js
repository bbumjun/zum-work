import Component from "../../core/Component";
import NavList from "../NavList";
import "./style";
export default class Header extends Component {
  template() {
    return `
      <div class="first-row">
        <div class="container">
        <span class="logo" route="/">ZUM 허브</span>
        <button class="bookmark">즐겨찾기</button>
        </div>
      </div>
      <nav class="second-row" data-component="nav-list"></nav
    `;
  }

  mounted() {
    const $navList = this.target.querySelector('[data-component="nav-list"]');

    new NavList($navList, {
      navItems: [
        { path: "/", name: "홈" },
        { path: "/life", name: "라이프" },
        { path: "/food", name: "푸드" },
        { path: "/travel", name: "여행" },
        { path: "/culture", name: "컬쳐" },
      ],
    });
  }
}
