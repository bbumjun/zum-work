import Component from "../../core/Component";
import "./style";
export default class RankTable extends Component {
  template() {
    const { items } = this.props;
    return `
    <h3>실시간 TOP 12</h3>
    <ul class="rank-list">
      ${items
        .map(
          ({ idx, title, mediaName, url }, i) => `
        <li class="rank-item">
        <a href="${url}">
          <span class="rank-index">${i + 1}</span>
          <div class="description">
            <p>${title}</p>
            <sub>${mediaName}</sub>
          </div>
          </a>
        </li>
      `
        )
        .join("")}
    </ul>
    `;
  }
}
