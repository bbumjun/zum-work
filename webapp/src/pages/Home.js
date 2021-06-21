import Component from "../core/Component";
import CardList from "../components/CardList";
import Loader from "../components/Loader";
import fetch from "../util/fetchWithTimeout";
export default class Home extends Component {
  setup() {
    this.state = {
      life: [],
      food: [],
      travel: [],
      culture: [],
      loading: true,
      error: null,
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
    <section data-component="life-contents"></section>
    <section data-component="food-contents"></section>
    <section data-component="travel-contents"></section>
    <section data-component="culture-contents"></section>
    `;
  }

  mounted() {
    const { loading, error } = this.state;
    if (loading) {
      const $loader = this.target.querySelector('[data-component="loader"]');
      new Loader($loader, {});

      const baseUrl = "http://localhost:3000";
      const categories = ["life", "food", "travel", "culture"];
      Promise.all(
        categories.map((category) => fetch(baseUrl + `/content/${category}`))
      )
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((dataArr) => {
          this.setState({
            life: dataArr[0],
            food: dataArr[1],
            travel: dataArr[2],
            culture: dataArr[3],
          });
        })
        .catch((err) => {
          this.setState({ error: err });
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    } else if (!error) {
      const $lifeSection = this.target.querySelector(
        '[data-component="life-contents"]'
      );
      const $foodSection = this.target.querySelector(
        '[data-component="food-contents"]'
      );
      const $travelSection = this.target.querySelector(
        '[data-component="travel-contents"]'
      );
      const $cultureSection = this.target.querySelector(
        '[data-component="culture-contents"]'
      );

      const { life, food, travel, culture } = this.state;
      new CardList($lifeSection, { items: life, title: "라이프" });
      new CardList($foodSection, { items: food, title: "푸드" });
      new CardList($travelSection, { items: travel, title: "여행" });
      new CardList($cultureSection, { items: culture, title: "문화" });
    }
  }
}
