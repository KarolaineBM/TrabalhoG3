<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Registrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Nome" v-model="form.name" outlined rounded />
        <q-input label="Email" v-model="form.email" outlined rounded />
        <q-input label="Senha" v-model="form.password" outlined rounded />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Registrar"
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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageRegister",

  setup() {
    const router = useRouter();
    const { register } = useAuthUser();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value);
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
        console.log(register);
      } catch (error) {
        alert(error);
      }
    };

    return { form, handleRegister };
  },
});
</script>
