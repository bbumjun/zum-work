import Router from "./Router";

export default (routes) => {
  const router = new Router(routes, document.getElementById("router"));

  document.addEventListener("DOMContentLoaded", (e) => {
    document.addEventListener("click", ({ target }) => {
      if (target.hasAttribute("route")) {
        const matchedRoute = router.match(target.getAttribute("route"));
        history.pushState({}, matchedRoute.name, matchedRoute.path);
        router.navigate(matchedRoute);

        const pushStateEvent = new Event("pushstate");
        window.dispatchEvent(pushStateEvent);
      }
    });
  });

  window.onpopstate = () => {
    router.navigate(router.match(location.pathname));
  };
};
