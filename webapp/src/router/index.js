import Router from "./Router";

export default (routes) => {
  const router = new Router(routes, document.getElementById("router"));

  document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll("[route]").forEach((route) =>
      route.addEventListener("click", (e) => {
        const matchedRoute = router.match(e.target.getAttribute("route"));
        history.pushState({}, matchedRoute.name, matchedRoute.path);
        router.navigate(matchedRoute);
      })
    );
  });

  window.onpopstate = () => {
    router.navigate(router.match(location.pathname));
  };
};
