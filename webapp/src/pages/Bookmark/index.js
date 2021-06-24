import Component from "../../core/Component";
import CardList from "../../components/CardList";
import bookmarks from "../../store/bookmarks";
import "./style";
export default class Bookmark extends Component {
  template() {
    return `
    <div class="header-container">
      <h2>북마크한 글</h2>
    </div>
    <section data-component="bookmark-list"></section>
    `;
  }

  mounted() {
    const bookmarkList = this.target.querySelector(
      '[data-component="bookmark-list"]'
    );

    new CardList(bookmarkList, { items: bookmarks.list });
  }
}
