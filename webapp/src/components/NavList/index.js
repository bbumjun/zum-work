import Component from "../../core/Component";
import "./style";
export default class NavList extends Component {
  setup() {
    this.state = {
      currentPath: location.pathname,
    };
  }
  template() {
    const { navItems } = this.props;
    const { currentPath } = this.state;
    return `
    <ul>
      ${navItems
        .map(
          ({ path, name }) => `
      <li>
        <button route=${path} ${
            currentPath === path ? "class='active'" : ""
          }>${name}</button>
      </li>
      `
        )
        .join("")}
    </ul>
    
    `;
  }

  setEvent() {
    window.addEventListener("pushstate", () => {
      this.setState({
        currentPath: location.pathname,
      });
    });

    window.addEventListener("popstate", () => {
      this.setState({
        currentPath: location.pathname,
      });
    });
  }
}
