import Component from "./core/Component";
import router from "./router";
import Route from "./router/Route";
import Home from "./pages/Home";
import SubPage from "./pages/SubPage";
import Header from "./components/Header";
import "./scss/main";
import Bookmark from "./pages/Bookmark";
import Detail from "./pages/Detail";
const routes = [
  new Route("home", {}, "/", Home),
  new Route(
    "life",
    {
      categoryName: "라이프",
    },
    "/life",
    SubPage
  ),
  new Route(
    "food",
    {
      categoryName: "푸드",
    },
    "/food",
    SubPage
  ),
  new Route(
    "travel",
    {
      categoryName: "여행",
    },
    "/travel",
    SubPage
  ),
  new Route(
    "culture",
    {
      categoryName: "컬쳐",
    },
    "/culture",
    SubPage
  ),
  new Route("bookmark", {}, "/bookmark", Bookmark),
  new Route("detail", {}, "/detail", Detail),
];
export default class App extends Component {
  setup() {}

  template() {
    return `
    <header data-component="header"></header>
    <main id="router"></div>`;
  }
  mounted() {
    router(routes);
    const $header = this.target.querySelector('[data-component="header"]');

    new Header($header);
  }
}
