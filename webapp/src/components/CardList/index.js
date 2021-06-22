import Component from "../../core/Component";
import "./style";
import bookmarks from "../../store/bookmarks";

export default class CardList extends Component {
  template() {
    const { items } = this.props;
    return `
    ${
      this.props.title
        ? `<h3 class="category-title">${this.props.title}</h3>`
        : ""
    }
    <ul class="flex-container">
      ${items
        .map(
          ({ idx, title, imageUrl, mediaName, url, summaryContent }) => `
      <li data-idx="${idx}">
          <img class="thumbnail" src="${imageUrl}"/>  
          <h4 class="title">${title}</h4>
          <p class="description">${summaryContent.slice(0, 40)}${
            summaryContent.length >= 40 ? "..." : ""
          }</p>
          <div class="last-line">
          <sub class="media-name">${mediaName}</sub>
          <sub class="bookmark" data-idx="${idx}">${
            bookmarks.hasItem(idx) ? "★" : `☆`
          }</sub>
          </div>
      </li>
      `
        )
        .join("")}
    </ul>
    `;
  }

  filteredItem(idx) {
    return this.props.items.filter((item) => item.idx == idx);
  }
  setEvent() {
    this.addEvent("click", ".bookmark", ({ target }) => {
      const idx = target.dataset.idx;
      const item = this.filteredItem(idx);
      if (bookmarks.hasItem(idx)) {
        bookmarks.deleteItem(idx);
      } else {
        bookmarks.newItem(item);
      }
      this.render();
    });
  }
}
