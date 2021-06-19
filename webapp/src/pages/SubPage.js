import Component from "../core/Component";

export default class SubPage extends Component {
  template() {
    return `
    <h2>${this.props.category}</h2>
    `;
  }
}
