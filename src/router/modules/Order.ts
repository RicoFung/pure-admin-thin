import { $t } from "@/plugins/i18n";

export default {
  path: "/order",
  meta: {
    icon: "ep:document",
    title: $t("menus.order")
  },
  children: [
    {
      path: "/order/offline",
      meta: {
        title: $t("menus.order")
      },
      children: [
        {
          path: "/order/offline/unfinished",
          component: () => import("@/views/order/offline/unfinished/index.vue"),
          name: "offline-unfinished",
          meta: {
            title: $t("menus.unfinishedOrder")
          }
        },
        {
          path: "/order/offline/finished",
          component: () => import("@/views/order/offline/finished/index.vue"),
          name: "offline-finished",
          meta: {
            title: $t("menus.finishedOrder")
          }
        }
      ]
    },
    {
      path: "/order/o2o",
      meta: {
        title: $t("menus.o2oOrder")
      },
      children: [
        {
          path: "/order/o2o/o2o-order",
          component: () => import("@/views/order/o2o/order/index.vue"),
          name: "o2o-order",
          meta: {
            title: $t("menus.onlineOrder")
          }
        },
        {
          path: "/order/o2o/o2o-return",
          component: () => import("@/views/order/o2o/return/index.vue"),
          name: "o2o-return",
          meta: {
            title: $t("menus.onlineReturnOrder")
          }
        }
      ]
    }
  ]
};
