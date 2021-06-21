import Component from "../../core/Component";
import "./style";
export default class CardList extends Component {
  template() {
    const { items } = this.props;
    return `
    <h3 class="category-title">${this.props.title}</h3>
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
          <span class="media-name">${mediaName}</span>
          <span class="bookmark-button">즐겨찾기 추가</span>
          </div>
      </li>
      `
        )
        .join("")}
    </ul>
    `;
  }

  mounted() {}
}
