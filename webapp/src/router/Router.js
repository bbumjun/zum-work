export default class Router {
  constructor(routes, target) {
    this.routes = routes;
    this.target = target;
    this.navigate(this.match(location.pathname));
  }

  match(path) {
    return this.routes.filter((route) => route.path === path)[0];
  }
  navigate(route) {
    new route.Component(this.target, route.props);
  }
}
