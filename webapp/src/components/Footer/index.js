import Component from "../../core/Component";
export default class Footer extends Component {
  setup() {
    const observer = new IntersectionObserver(this.props.fetchNext, {
      rootMargin: "100px",
    });
    observer.observe(this.target);
  }
  template() {
    return `<p style="text-align:center">ZUM Internet</p>`;
  }
}
