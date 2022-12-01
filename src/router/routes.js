const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "homepage",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("pages/Register.vue"),
      },
      {
        path: "/email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/EmailConfirmation.vue"),
      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("pages/ForgotPassword.vue"),
      },
      {
        path: "/pagamento",
        name: "pagamento",
        component: () => import("pages/PagamentoPage.vue"),
      },
      {
        path: "/pagpage",
        name: "pagpage",
        component: () => import("pages/PagPage.vue"),
      },
      {
        path: "/faleconosco",
        name: "faleConoscoPage",
        component: () => import("pages/faleConoscoPage.vue"),
      },
      {
        path: "/sobrenos",
        name: "sobreNosPage",
        component: () => import("pages/sobreNosPage.vue"),
      },
      {
        path: "/produtos",
        name: "produtos",
        component: () => import("pages/ProdutoPage.vue"),
      },
      {
        path: "/perguntas",
        name: "PerguntasRespostas",
        component: () => import("src/pages/PerguntasRespostasPage.vue"),
        meta: { requireLogin: true },
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import("pages/Me.vue"),
      },
      // { path: "", component: () => import("pages/Index.vue") }
    ],
    meta: { requiresAuth: true },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
