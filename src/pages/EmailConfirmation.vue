<template>
  <q-page padding>
    <p class="text-body1">Obrigada por se registrar !</p>
    <p class="text-body1">
      Por favor confirme seu email para finalizar o registro:
      <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageEmailConfirmation",
});
</script>
