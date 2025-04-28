import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  component: Layout,
  redirect: "/cart",
  meta: {
    icon: "ep:shopping-cart",
    title: $t("menus.cart"),
    rank: 1
  },
  children: [
    {
      path: "/cart",
      name: "Cart",
      component: () => import("@/views/cart/index.vue"),
      meta: {
        title: $t("menus.cart"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
