import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("perso", [
    // index(""),
    route("add", "routes/showAddForm.tsx")
  ])
] satisfies RouteConfig;
