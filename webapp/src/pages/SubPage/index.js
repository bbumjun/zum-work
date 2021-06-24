import CardList from "../../components/CardList";
import Loader from "../../components/Loader";
import Component from "../../core/Component";
import fetch from "../../util/fetchWithTimeout";
import Footer from "../../components/Footer";
import "./style";
export default class SubPage extends Component {
  setup() {
    this.state = {
      loading: true,
      error: null,
      data: [],
      page: 1,
    };
  }
  template() {
    const { loading, error } = this.state;
    if (loading) {
      return `
        <div data-component="loader"></div>
      `;
    }
    if (error) {
      return `
      <h2>페이지를 로드하는 중 문제가 발생했습니다.</h2>
      <h2>${error}</h2>
      `;
    }
    return `
    <div class="header-container">
      <h2 class="category-name">${this.props.categoryName}</h2>
    </div>
    <div data-component="card-list"></div>
    <footer data-component="footer"></footer>
    `;
  }

  mounted() {
    const { loading, error, data } = this.state;

    if (loading) {
      const $loader = this.target.querySelector('[data-component="loader"]');
      new Loader($loader);

      const baseUrl = "http://localhost:3000/content";
      fetch(baseUrl + location.pathname + "/1")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data: this.state.data.concat(data), loading: false });
        })
        .catch((error) => {
          this.setState({ error, loading: false });
        });
    } else if (!error) {
      const $cardList = this.target.querySelector(
        '[data-component="card-list"]'
      );
      const $footer = this.target.querySelector('[data-component="footer"]');
      new CardList($cardList, {
        items: data,
      });

      new Footer($footer, { fetchNext: this.fetchNext.bind(this) });
    }
  }

  fetchNext(entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    fetch(
      "http://localhost:3000/content/" +
        location.pathname +
        `/${this.state.page + 1}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          observer.disconnect();
        } else {
          this.setState({
            data: this.state.data.concat(data),
            page: this.state.page + 1,
          });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
}
