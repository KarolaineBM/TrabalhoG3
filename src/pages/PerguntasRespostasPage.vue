<template>
  <q-page class="q-pa-md">
    <div class="row flex justify-center q-col-gutter-x-sm">
      <div class="col-md-6 col-xs-12">
        <q-card class="text-dark">
          <q-card-section>
            <div class="col-md-12 text-center q-col-gutter-y-md">
              <div class="text-h6">Selecione Sua Dúvida:</div>
              <div class="row flex justify-center">
                <div class="col-md-3">
                  <q-select
                    dense
                    outlined
                    v-model="duvidaSelect"
                    :options="duvidaOptions"
                    @update:model-value="selecionandoDuvida()"
                    label="Selecione"
                    option-value="nome"
                    option-label="nome"
                    map-options
                    emit-value
                  ></q-select>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card
          class="q-pb-md"
          v-if="fretev || localizarv || cancelamentov || duvidasFrquentesv"
        >
          <div
            class="row q-mt-md flex justify-center q-col-gutter-x-sm"
            v-if="fretev || localizarv || cancelamentov || duvidasFrquentesv"
          >
            <div class="col-md-12 col-xs-12">
              <div class="col-md-12 text-center">
                <div class="text-h6 q-mt-sm">{{ duvidaSelect }}</div>
                <div class="row flex justify-center q-col-gutter-x-xl q-mt-lg">
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md">
                        <q-icon
                          name="account_circle"
                          color="primary"
                          size="3rem"
                        ></q-icon>
                        <p class="text-weight-bold">Cliente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ cliente_txt1 }}
                      </p>
                    </q-card>
                  </div>

                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ atendente_txt1 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md q-mt-sm">
                        <q-icon
                          style="border-radius: 50%"
                          class="bg-primary q-pa-sm"
                          name="headset_mic"
                          color="white"
                          size="1.7rem"
                        ></q-icon>
                        <p class="text-weight-bold q-mt-xs">Atendente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row q-mt-md flex justify-center q-col-gutter-x-sm"
            v-if="fretev || cancelamentov || duvidasFrquentesv"
          >
            <div class="col-md-12 col-xs-12">
              <div class="col-md-12 text-center">
                <div class="row flex justify-center q-col-gutter-x-xl q-mt-lg">
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md">
                        <q-icon
                          name="account_circle"
                          color="primary"
                          size="3rem"
                        ></q-icon>
                        <p class="text-weight-bold">Cliente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ cliente_txt2 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ atendente_txt2 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md q-mt-sm">
                        <q-icon
                          style="border-radius: 50%"
                          class="bg-primary q-pa-sm"
                          name="headset_mic"
                          color="white"
                          size="1.7rem"
                        ></q-icon>
                        <p class="text-weight-bold q-mt-xs">Atendente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row q-mt-md flex justify-center q-col-gutter-x-sm"
            v-if="cancelamentov || duvidasFrquentesv"
          >
            <div class="col-md-12 col-xs-12">
              <div class="col-md-12 text-center">
                <div class="row flex justify-center q-col-gutter-x-xl q-mt-lg">
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md">
                        <q-icon
                          name="account_circle"
                          color="primary"
                          size="3rem"
                        ></q-icon>
                        <p class="text-weight-bold">Cliente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ cliente_txt3 }}
                      </p>
                    </q-card>
                  </div>

                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ atendente_txt3 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md q-mt-sm">
                        <q-icon
                          style="border-radius: 50%"
                          class="bg-primary q-pa-sm"
                          name="headset_mic"
                          color="white"
                          size="1.7rem"
                        ></q-icon>
                        <p class="text-weight-bold q-mt-xs">Atendente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row q-mt-md flex justify-center q-col-gutter-x-sm"
            v-if="duvidasFrquentesv"
          >
            <div class="col-md-12 col-xs-12">
              <div class="col-md-12 text-center">
                <div class="row flex justify-center q-col-gutter-x-xl q-mt-lg">
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md">
                        <q-icon
                          name="account_circle"
                          color="primary"
                          size="3rem"
                        ></q-icon>
                        <p class="text-weight-bold">Cliente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ cliente_txt4 }}
                      </p>
                    </q-card>
                  </div>

                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ atendente_txt4 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md q-mt-sm">
                        <q-icon
                          style="border-radius: 50%"
                          class="bg-primary q-pa-sm"
                          name="headset_mic"
                          color="white"
                          size="1.7rem"
                        ></q-icon>
                        <p class="text-weight-bold q-mt-xs">Atendente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row q-mt-md flex justify-center q-col-gutter-x-sm"
            v-if="duvidasFrquentesv"
          >
            <div class="col-md-12 col-xs-12">
              <div class="col-md-12 text-center">
                <div class="row flex justify-center q-col-gutter-x-xl q-mt-lg">
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md">
                        <q-icon
                          name="account_circle"
                          color="primary"
                          size="3rem"
                        ></q-icon>
                        <p class="text-weight-bold">Cliente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ cliente_txt5 }}
                      </p>
                    </q-card>
                  </div>

                  <div class="col-md-3 text-left">
                    <q-card class="q-pa-sm">
                      <p>
                        {{ atendente_txt5 }}
                      </p>
                    </q-card>
                  </div>
                  <div class="col-md-1">
                    <div class="row column">
                      <div class="col-md q-mt-sm">
                        <q-icon
                          style="border-radius: 50%"
                          class="bg-primary q-pa-sm"
                          name="headset_mic"
                          color="white"
                          size="1.7rem"
                        ></q-icon>
                        <p class="text-weight-bold q-mt-xs">Atendente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "PergutasRespostas",

  setup() {
    const cliente_txt1 = ref("");
    const cliente_txt2 = ref("");
    const cliente_txt3 = ref("");
    const cliente_txt4 = ref("");
    const cliente_txt5 = ref("");
    const atendente_txt1 = ref("");
    const atendente_txt2 = ref("");
    const atendente_txt3 = ref("");
    const atendente_txt4 = ref("");
    const atendente_txt5 = ref("");
    const duvidaOptions = ref([
      { nome: "Dúvidas frequentes" },
      { nome: "Cancelamentos" },
      { nome: "Frete" },
      { nome: "Localizar encomenda" },
    ]);
    const cancelamentov = ref(false);
    const fretev = ref(false);
    const localizarv = ref(false);
    const duvidasFrquentesv = ref(false);

    const duvidaSelect = ref([]);

    const selecionandoDuvida = () => {
      console.log(duvidaSelect.value);
      cancelamentov.value = false;
      fretev.value = false;
      localizarv.value = false;
      duvidasFrquentesv.value = false;
      if (duvidaSelect.value == "Dúvidas frequentes") {
        duvidasFrquentesv.value = true;
        cliente_txt1.value =
          "Olá, preciso estar cadastrado no site para comprar?";
        atendente_txt1.value =
          "Olá, não é necessário, os únicos dados a serem solicitados são os básicos como contato,localização e forma de pagamento.";
        cliente_txt2.value = "Olá, existem cupons de desconto?";
        atendente_txt2.value =
          "Olá, fornecemos aos clientes com cadastro, um quiz via e-mail, onde após responde-lo é obtido um cupom de 10% de desconto.";
        cliente_txt3.value = "Olá, qual o tempo para entrega de uma encomenda?";
        atendente_txt3.value =
          "Olá, o prazo para entrega é de até 5 dias úteis para encomendas grandes (Bolos) e 2 dias úteis para as demais.";
        cliente_txt4.value =
          "Olá, como faço para me candidatar á jovem aprendiz?";
        atendente_txt4.value =
          "Olá, recebemos currículos via nosso e-mail de suporte, basta utilizar no assunto a palavra 'Currículo' e retornaremos contato. (graci.cakes@hotmail.com)";
        cliente_txt5.value = "Olá, vocês fazem bolos para aniversário?";
        atendente_txt5.value =
          "Olá, sim, basta específicar via e-mail sua solicitação após compra.";
      } else if (duvidaSelect.value == "Cancelamentos") {
        cancelamentov.value = true;
        cliente_txt1.value = "Olá, como faço para cancelar uma compra?";
        atendente_txt1.value =
          "Olá, é possível efetuar o cancelamento de sua compra entrando em contato com nosso canal de suporte, chat ou telefonia.";
        cliente_txt2.value =
          "Olá, há multa por ser feito o cancelamento de uma compra?";
        atendente_txt2.value =
          "Olá, referente a multa, nossos termos definem que caso a compra seja cancelada fora do prazo de 2 dias, o cliente deverá arcar com 30% do valor da compra.";
        cliente_txt3.value =
          "Olá, como faço para saber se minha compra pode ser cancelada sem a cobrança de multas?";
        atendente_txt3.value =
          "Olá, o prazo referente a multas de cancelamento pós compra, refere-se a 2 dias após a compra (48horas), caso ainda permaneça em dúvida contate nosso time de suporte. ";
      } else if (duvidaSelect.value == "Frete") {
        fretev.value = true;
        cliente_txt1.value =
          "Olá, como faço para calcular o frete na hora de comprar?";
        atendente_txt1.value =
          "Olá, é possível ver o valor do frete após pesquisar seu endereço na página de pagamento.";
        cliente_txt2.value =
          "Olá, há possibilidade de retirar ai na confeitaria?, diminuindo assim o preço.";
        atendente_txt2.value =
          "Olá, infelizmente ainda não estamos fornecendo a retirada diretamente conosco.";
      } else if (duvidaSelect.value == "Localizar encomenda") {
        localizarv.value = true;
        cliente_txt1.value = "Olá, como vejo se minha entrega está chegando?";
        atendente_txt1.value =
          "Olá, referente a entrega, notificamos via e-mail, também há a possibilidade de solicitar via nossos canais de chat e telefone.";
      }
    };

    return {
      duvidaSelect,
      duvidaOptions,
      cliente_txt1,
      cliente_txt2,
      cliente_txt3,
      cliente_txt4,
      cliente_txt5,
      atendente_txt1,
      atendente_txt2,
      atendente_txt3,
      atendente_txt4,
      atendente_txt5,
      cancelamentov,
      fretev,
      localizarv,
      duvidasFrquentesv,
      selecionandoDuvida,
    };
  },
});
</script>
