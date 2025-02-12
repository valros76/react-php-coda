import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("persos", [
    // index(""),
    route("add", "routes/showAddForm.tsx")
  ])
] satisfies RouteConfig;
