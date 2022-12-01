<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          icon="house"
          push
          color="primary"
          no-caps
          label="Graci Barros Cake"
          class="q-ml-md text-subtitle2 text-weight-bold"
          to="/"
        />
        <q-space></q-space>
        <div class="q-gutter-x-lg q-mr-xl">
          <q-btn
            push
            color="primary"
            no-caps
            label="Produtos"
            icon="local_mall"
            to="/pagpage"
          />
          <q-btn
            push
            color="primary"
            no-caps
            label="Sobre nós"
            icon="help"
            to="/sobrenos"
          />
          <q-btn
            push
            color="primary"
            no-caps
            label="Perguntas & Respostas"
            icon="chat"
            to="/perguntas"
          />
          <q-btn
            push
            color="primary"
            no-caps
            label="Fale conosco"
            icon="call"
            to="/faleconosco"
          />
        </div>
        <q-space></q-space>
        <q-btn outline icon="person" to="/register"><q-tooltip>Registrar-se</q-tooltip></q-btn>
        <!-- <q-btn-dropdown outline color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown> -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginLayout",

  setup() {
    const router = useRouter();

    const { logout } = useAuthUser();

    const handleLogout = async () => {
      $q.dialog({
        title: "Sair",
        message: "Você realmente deseja sair?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: "login" });
      });
    };
    return {
      handleLogout,
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
