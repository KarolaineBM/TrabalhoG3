<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center">Redefinir senha</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="email" outlined rounded />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Redefinir"
            color="primary"
            class="full-width"
            outlined
            rounded
            type="submit"
          />
          <q-btn
            label="Voltar"
            class="full-width"
            color="primary"
            flat
            rounded
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";

export default defineComponent({
  setup() {
    const { sendPasswordRestEmail } = useAuthUser();

    const email = ref("");

    const handlePasswordReset = async () => {
      await sendPasswordRestEmail(email.value);
      alert(`Redefinição de senha enviada para o e-mail: ${email.value}`);
    };

    return {
      email,
      handlePasswordReset,
    };
  },
});
</script>
