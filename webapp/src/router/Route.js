export default class Route {
  constructor(name, props, path, component) {
    this.name = name;
    this.props = props;
    this.path = path;
    this.Component = component;
  }
}
