import Component from "./core/Component";
import router from "./router";
import Route from "./router/Route";
import Home from "./pages/Home";
import SubPage from "./pages/SubPage";
import Header from "./components/Header";
import "./scss/main";
const routes = [
  new Route("home", {}, "/", Home),
  new Route(
    "life",
    {
      category: "life",
    },
    "/content/life",
    SubPage
  ),
  new Route(
    "food",
    {
      category: "food",
    },
    "/content/food",
    SubPage
  ),
  new Route(
    "travel",
    {
      category: "travel",
    },
    "/content/travel",
    SubPage
  ),
  new Route(
    "culture",
    {
      category: "culture",
    },
    "/content/culture",
    SubPage
  ),
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
