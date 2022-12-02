<template>
  <q-page>
    <q-form class="q-pa-xl">
      <q-card class="q-pa-md q-mt-sm">
        <div class="row flex justify-center full-height full-width text-center">
          <div class="col-md-3">
            <span class="text-h4 text-weight-bold">Dados do Cliente</span>
          </div>
          <div class="col-md-1 q-mr-lg" v-if="!travaInfo || !travaEnd">
            <q-btn size="md" outline round icon="close" color="negative"
              ><q-tooltip>Incompleto</q-tooltip></q-btn
            >
          </div>
          <div class="col-md-1 q-mr-lg" v-if="travaInfo && travaEnd">
            <q-btn size="md" outline round icon="done" color="positive"
              ><q-tooltip>Completo</q-tooltip></q-btn
            >
          </div>
        </div>
        <div class="row q-mt-sm q-mb-sm">
          <span class="text-subtitle1 text-weight-bold">Contato</span>
        </div>
        <hr />
        <div class="row q-mt-sm q-col-gutter-x-sm">
          <div class="col-md">
            <q-input
              :disable="travaInfo"
              outlined
              label="Nome"
              v-model="form.nome"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaInfo"
              outlined
              label="E-mail"
              v-model="form.email"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaInfo"
              outlined
              label="Celular"
              mask="(##) #####-####"
              v-model="form.celular"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaInfo"
              outlined
              label="Telefone"
              mask="(##) ####-####"
              v-model="form.telefone"
              dense
            >
            </q-input>
          </div>
          <div class="col-md-1 q-mt-xs" v-if="!travaInfo">
            <q-btn
              size="sm"
              @click="metodoTravaInfoCliente()"
              round
              icon="done"
              color="positive"
            ></q-btn>
          </div>
          <div class="col-md-1 q-mt-xs" v-if="travaInfo">
            <q-btn
              size="sm"
              @click="travaInfo = false"
              round
              icon="lock_open"
              color="blue-10"
            ></q-btn>
          </div>
        </div>
      </q-card>
      <q-card class="q-pa-md q-mt-sm">
        <div class="row q-mt-sm q-mb-sm">
          <span class="text-subtitle1 text-weight-bold">Endereço</span>
        </div>
        <hr />
        <div class="row q-mt-sm q-col-gutter-x-sm">
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="CEP"
              mask="#####-###"
              unmasked-value
              v-model="end.cep"
              dense
            >
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="search"
                  color="primary"
                  @click="buscarCEP()"
                />
              </template>
            </q-input>
          </div>
          <div class="col-md-2">
            <q-input
              :disable="travaEnd"
              outlined
              label="Logradouro"
              v-model="end.logradouro"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="Bairro"
              v-model="end.bairro"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="Localidade"
              v-model="end.localidade"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="UF"
              v-model="end.uf"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="Número"
              v-model="end.numero"
              dense
            >
            </q-input>
          </div>
          <div class="col-md">
            <q-input
              :disable="travaEnd"
              outlined
              label="Complemento"
              v-model="end.complemento"
              dense
            >
            </q-input>
          </div>
          <div class="col-md" v-if="fretev">
            <q-input disable outlined label="Frete" v-model="frete" dense>
            </q-input>
          </div>
          <div class="col-md-1 q-mt-xs">
            <q-btn
              size="sm"
              round
              @click="metodoTravaEndCliente()"
              icon="done"
              color="positive"
              v-if="!travaEnd"
            ></q-btn>
          </div>
          <div class="col-md-1 q-mt-xs">
            <q-btn
              size="sm"
              round
              @click="travaEnd = false"
              icon="lock_open"
              color="blue-10"
              v-if="travaEnd"
            ></q-btn>
          </div>
        </div>
      </q-card>
      <div
        class="row flex justify-center full-height full-width text-center q-mt-xl q-mb-md"
      >
        <div class="col-md-3">
          <span class="text-h4 text-weight-bold">Forma de Pagamento</span>
        </div>
        <div class="col-md-1 q-mr-lg" v-if="!travaPag">
          <q-btn size="md" outline round icon="close" color="negative"
            ><q-tooltip>Incompleto</q-tooltip></q-btn
          >
        </div>
        <div class="col-md-1 q-mr-lg" v-if="travaPag">
          <q-btn size="md" outline round icon="done" color="positive"
            ><q-tooltip>Completo</q-tooltip></q-btn
          >
        </div>
      </div>
      <q-card class="q-pa-md q-mt-sm">
        <div class="row q-mt-sm q-mb-sm">
          <span class="text-subtitle1 text-weight-bold"
            >Método de Pagamento</span
          >
        </div>
        <hr />
        <div class="row q-mt-sm q-mb-md q-col-gutter-x-sm">
          <div class="col-md-2">
            <q-select
              :disable="travaPag"
              outlined
              dense
              label="Forma de Pagamento"
              v-model="pagamento.forma_pagamento"
              :options="formaPagamentoOptions"
              @update:model-value="selecionandoFormaPagamento()"
              option-value="id"
              option-label="nome"
              emit-value
              map-options
            ></q-select>
          </div>
          <div v-if="creditov" class="col-md-2">
            <q-select
              :disable="travaPag"
              outlined
              dense
              label="Tipo do Pagamento"
              v-model="pagamento.tipo_pagamento"
              :options="pagamentoCredito"
              @update:model-value="selecionandoTipoPagamento()"
              option-value="id"
              option-label="nome"
              emit-value
              map-options
            ></q-select>
          </div>
          <div v-if="pixv" class="col-md-2">
            <q-select
              :disable="travaPag"
              outlined
              dense
              label="Tipo do Pagamento"
              v-model="pagamento.tipo_pagamento_pix"
              :options="pagamentoPIX"
              @update:model-value="selecionandoTipoPagamentoPix()"
              option-value="id"
              option-label="nome"
              emit-value
              map-options
            ></q-select>
          </div>
          <div v-if="valorv" class="col-md-2">
            <q-input
              disable
              outlined
              label="Valor Total"
              v-model="valor_total"
              dense
            >
            </q-input>
          </div>
          <div v-if="(valorv && boletov) || pixv" class="col-md-1 q-mt-xs">
            <q-btn
              v-show="!travaPag"
              class="q-ml-xs"
              size="sm"
              round
              @click="limparPagamento()"
              icon="remove"
              color="negative"
            ></q-btn>

            <q-btn
              :disable="travaPag"
              class="q-ml-sm"
              v-show="(!travaPag && pixv) || boletov"
              size="sm"
              round
              @click="metodoTravaPagCliente()"
              icon="done"
              color="positive"
            ></q-btn>
            <q-btn
              v-show="travaPag"
              size="sm"
              @click="travaPag = false"
              round
              icon="lock_open"
              color="blue-10"
            ></q-btn>
          </div>
        </div>
        <div v-if="pagamentov && !pixv">
          <div class="row q-mt-sm q-col-gutter-x-sm">
            <div class="col-md">
              <q-select
                :disable="travaPag"
                outlined
                dense
                label="Bandeira"
                v-model="pagamento.bandeira"
                :options="cartaoOptions"
                option-value="id"
                option-label="nome"
                emit-value
                map-options
              ></q-select>
            </div>
            <div class="col-md">
              <q-input
                :disable="travaPag"
                outlined
                label="Titular"
                v-model="pagamento.titular"
                dense
              >
              </q-input>
            </div>
            <div class="col-md">
              <q-input
                :disable="travaPag"
                outlined
                label="Vencimento"
                mask="##/##"
                v-model="pagamento.vencimento"
                dense
              >
              </q-input>
            </div>
            <div class="col-md">
              <q-input
                :disable="travaPag"
                outlined
                label="Números"
                mask="####-####-####-####"
                v-model="pagamento.numeros"
                dense
              >
              </q-input>
            </div>
            <div class="col-md">
              <q-input
                :disable="travaPag"
                outlined
                label="CVV"
                mask="###"
                v-model="pagamento.cvv"
                dense
              >
              </q-input>
            </div>
            <div class="col-md-1 q-mt-xs" v-if="!travaPag && !pag_alternativo">
              <q-btn
                size="sm"
                @click="metodoTravaPagCliente()"
                round
                icon="done"
                color="positive"
              ></q-btn>
            </div>
            <div class="col-md-1 q-mt-xs" v-if="travaPag">
              <q-btn
                size="sm"
                @click="travaPag = false"
                round
                icon="lock_open"
                color="blue-10"
              ></q-btn>
            </div>
          </div>
        </div>
      </q-card>
      <div
        class="row justify-center full-height full-width text-center q-mt-xl q-mb-md"
      >
        <div class="col-md" v-if="travaInfo && travaEnd && travaPag">
          <q-btn
            class="full-width"
            color="green"
            label="Efetuar Compra"
            @click="perguntaSeCompra()"
            no-caps
          ></q-btn>
        </div>
      </div>
      <q-dialog v-model="dialogPixTel" persistent>
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div
            class="row column justify-center text-center full-height full-width"
          >
            <div class="flex justify-center">
              <span class="text-h6 text-weight-bold q-mb-md">
                PIX Telefone
              </span>
              <a href="https://api.whatsapp.com/send?phone=5511974058218">
                <img
                  src="~assets/whatsapp-logo2.png"
                  style="width: 35px; height: auto"
              /></a>
            </div>
            <div class="col-md">
              <span class="text-subtittle2 text-weight-bold">
                <b style="color: #ff3333">Chave Pix:</b>
                &nbsp;<a
                  style="text-decoration: none; color: black"
                  href="https://api.whatsapp.com/send?phone=5511974058218"
                  >+55 (11) 97405-8218</a
                >
              </span>
            </div>

            <div class="col-md q-mt-md">
              <q-card-section class="q-pt-none">
                <div class="text-caption text-grey">
                  <b style="color: #ff3333">Sua compra foi efetuada</b>,
                  atualmente estamos aguardando a confirmação de seu pagamento:
                  <b style="color: #ff3333">PIX - Telefone</b>, obrigado pela
                  preferência!.
                </div>
              </q-card-section>
            </div>
            <div class="col-md-2 q-mt-md">
              <q-btn
                icon="local_mall"
                color="primary"
                no-caps
                to="/pagpage"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialogPixQR" persistent>
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div
            class="row column justify-center text-center full-height full-width"
          >
            <div class="flex justify-center">
              <span class="text-h6 text-weight-bold q-mb-md">
                PIX QR Code
              </span>
            </div>
            <div class="col-md">
              <img src="~assets/qrcode.png" />
            </div>

            <div class="col-md q-mt-lg">
              <q-card-section class="q-pt-none">
                <div class="text-caption text-grey">
                  <b style="color: #ff3333">Sua compra foi efetuada</b>,
                  atualmente estamos aguardando a confirmação de seu pagamento:
                  <b style="color: #ff3333">PIX - QR Code</b>, assim que
                  possível entraremos em contato via e-mail, atualizado-o sobre
                  a compra, dúvidas ou suporte basta acessar o fale conosco,
                  obrigado pela preferência!.
                </div>
              </q-card-section>
            </div>
            <div class="col-md-2 q-mt-md">
              <q-btn
                icon="local_mall"
                color="primary"
                no-caps
                to="/pagpage"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialogCredito" persistent>
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div
            class="row column justify-center text-center full-height full-width"
          >
            <div class="flex justify-center">
              <span class="text-h6 text-weight-bold q-mb-md">
                Cartão de Crédito: {{ pagamento.tipo_pagamento }}
              </span>
            </div>

            <div class="col-md q-mt-md">
              <q-card-section class="q-pt-none">
                <div class="text-caption text-grey">
                  <b style="color: #ff3333">Sua compra foi efetuada</b>,
                  atualmente estamos aguardando a confirmação de seu pagamento:
                  <b style="color: #ff3333"
                    >Cartão de Crédito - {{ pagamento.tipo_pagamento }}</b
                  >, obrigado pela preferência!.
                </div>
              </q-card-section>
            </div>
            <div class="col-md-2 q-mt-md">
              <q-btn
                icon="local_mall"
                color="primary"
                no-caps
                to="/pagpage"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialogDebito" persistent>
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div
            class="row column justify-center text-center full-height full-width"
          >
            <div class="flex justify-center">
              <span class="text-h6 text-weight-bold q-mb-md"> Débito </span>
            </div>

            <div class="col-md q-mt-md">
              <q-card-section class="q-pt-none">
                <div class="text-caption text-grey">
                  <b style="color: #ff3333">Sua compra foi efetuada</b>,
                  atualmente estamos aguardando a confirmação de seu pagamento:
                  <b style="color: #ff3333">débito</b>, obrigado pela
                  preferência!.
                </div>
              </q-card-section>
            </div>
            <div class="col-md-2 q-mt-md">
              <q-btn
                icon="local_mall"
                color="primary"
                no-caps
                to="/pagpage"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialogBoleto" persistent>
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div
            class="row column justify-center text-center full-height full-width"
          >
            <div class="flex justify-center">
              <span class="text-h6 text-weight-bold q-mb-md">
                Boleto Bancário
              </span>
            </div>
            <div class="col-md q-mt-md">
              <q-card-section class="q-pt-none">
                <div class="text-caption text-grey">
                  <b style="color: #ff3333">Sua compra foi efetuada</b>,
                  atualmente estamos aguardando a confirmação de seu pagamento:
                  <b style="color: #ff3333"
                    >boleto Bancário enviado ao seu e-mail</b
                  >, obrigado pela preferência!.
                </div>
              </q-card-section>
            </div>
            <div class="col-md-2 q-mt-md">
              <q-btn
                icon="local_mall"
                color="primary"
                no-caps
                to="/pagpage"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card>
      </q-dialog>
    </q-form>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useQuasar, Notify } from "quasar";
export default defineComponent({
  name: "PagamentoPage",
  setup() {
    // Váriaveis
    const $q = useQuasar();
    const dialogPixTel = ref(false);
    const dialogPixQR = ref(false);
    const dialogDebito = ref(false);
    const dialogCredito = ref(false);
    const dialogBoleto = ref(false);
    const pagarv = ref(false);
    const travaInfo = ref(false);
    const travaEnd = ref(false);
    const travaPag = ref(false);
    const pag_alternativo = ref(false);
    const pagamentov = ref(false);
    const creditov = ref(false);
    const pixv = ref(false);
    const debitov = ref(false);
    const valorv = ref(false);
    const boletov = ref(false);
    const fretev = ref(false);
    const frete = ref("R$ 11,50");
    const valor_total = ref("");

    const form = ref({
      nome: "",
      email: "",
      celular: "",
      telefone: "",
    });

    const end = ref({
      cep: "",
      logradouro: "",
      bairro: "",
      localidade: "",
      uf: "",
      numero: "",
      complemento: "",
    });

    const pagamento = ref({
      forma_pagamento: "",
      tipo_pagamento: "",
      tipo_pagamento_pix: "",
      bandeira: "",
      titular: "",
      vencimento: "",
      numeros: "",
      cvv: "",
    });

    const endereco = ref({
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
    });

    const formaPagamentoOptions = ref([
      { id: "1", nome: "Crédito" },
      { id: "2", nome: "Débito" },
      { id: "3", nome: "PIX" },
      { id: "4", nome: "Boleto Bancário" },
    ]);

    const cartaoOptions = ref([
      { id: "1", nome: "Mastercard" },
      { id: "2", nome: "Visa" },
      { id: "3", nome: "Elo" },
    ]);

    const pagamentoCredito = ref([
      { id: "1X", nome: "1X" },
      { id: "2X", nome: "2X" },
      { id: "3X", nome: "3X" },
      { id: "4X", nome: "4X" },
      { id: "5X", nome: "5X" },
      { id: "6X", nome: "6X" },
      { id: "7X", nome: "7X" },
      { id: "8X", nome: "8X" },
      { id: "9X", nome: "9X" },
      { id: "10X", nome: "10X" },
      { id: "11X", nome: "11X" },
      { id: "12X", nome: "12X" },
    ]);

    const pagamentoPIX = ref([
      { id: "tel", nome: "Telefone" },
      { id: "qr", nome: "QR Code" },
    ]);

    // Métodos
    const MsgCepIncorreto = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message: "CEP incorreto ou inexistente!",
      });
    };
    const MsgInfoIncompleto = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message: "Dados do Cliente incompleto - preencha campos de contato!",
      });
    };
    const MsgEndIncompleto = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message: "Dados do Cliente incompleto - preencha campos de endereço!",
      });
    };
    const MsgPagIncompleto = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message:
          "Forma de Pagamento incompleto - preencha campos de Método de Pagamento!",
      });
    };
    const MsgTipoPagProducao = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message:
          "Tipo de pagamento em manutenção - selecione outro tipo de pagamento!",
      });
    };
    const MsgSelecionePag = () => {
      Notify.create({
        icon: "announcement",
        type: "warning",
        multiLine: true,
        progress: true,
        html: true,
        position: "top",
        message: "Selecione o tipo de pagamento!",
      });
    };
    const MsgSucesso = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "CEP encontrado!",
      });
    };
    const MsgSucessoCompraCredito = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "Compra efetuada! - Nº Pedido: 089324",
      });
    };
    const MsgSucessoCompraDebito = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "Compra efetuada! - Nº Pedido: 076341",
      });
    };
    const MsgSucessoCompraPIX = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "Compra efetuada! - Nº Pedido: 071089",
      });
    };
    const MsgSucessoCompraBoleto = () => {
      Notify.create({
        icon: "announcement",
        type: "positive",
        progress: true,
        multiLine: true,
        html: true,
        position: "top",
        message: "Compra efetuada! - Nº Pedido: 087545",
      });
    };
    const buscarCEP = async () => {
      if (end.value.cep.length == 8) {
        const url = `https://viacep.com.br/ws/${end.value.cep}/json/`;
        const dados = await fetch(url);
        end.value = await dados.json();
        fretev.value = true;
        MsgSucesso();
      } else {
        MsgCepIncorreto();
        return;
      }
    };
    const limparEndereco = () => {
      endereco.value = {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
      };

      fretev.value = false;
    };
    const limparPagamento = () => {
      pagamentov.value = false;
      creditov.value = false;
      pixv.value = false;
      debitov.value = false;
      valorv.value = false;
      travaPag.value = false;
      pagamento.value.forma_pagamento = "";
      pagamento.value.tipo_pagamento = "";
      valor_total.value = "";
    };
    const pagamento1 = () => {
      creditov.value = true;
      debitov.value = false;
      pagamentov.value = false;
      pixv.value = false;
      boletov.value = false;
      valorv.value = false;
      pagamento.value.tipo_pagamento = "";
      pagamento.value.tipo_pagamento_pix = "";
    };
    const pagamento2 = () => {
      debitov.value = true;
      creditov.value = false;
      pixv.value = false;
      boletov.value = false;
      pagamento.value.tipo_pagamento = "";
      pagamento.value.tipo_pagamento_pix = "";
    };
    const pagamento3 = () => {
      pixv.value = true;
      debitov.value = false;
      creditov.value = false;
      pagamentov.value = false;
      boletov.value = false;
      valorv.value = false;
      pagamento.value.tipo_pagamento = "";
      pagamento.value.tipo_pagamento_pix = "";
    };
    const pagamento4 = () => {
      boletov.value = true;
      debitov.value = false;
      creditov.value = false;
      pagamentov.value = false;
      pixv.value = false;
      valorv.value = false;
      pagamento.value.tipo_pagamento = "";
      pagamento.value.tipo_pagamento_pix = "";
    };
    const selecionandoFormaPagamento = () => {
      if (pagamento.value.forma_pagamento == "1") {
        pagamento1();
      } else if (pagamento.value.forma_pagamento == "2") {
        pagamentov.value = true;
        valorv.value = true;
        valor_total.value = "R$ 35,50";
        pagamento2();
      } else if (pagamento.value.forma_pagamento == "3") {
        pagamento3();
      } else if (pagamento.value.forma_pagamento == "4") {
        pagamento4();
        valorv.value = true;
        valor_total.value = "R$ 42,50";
      }
    };
    const selecionandoTipoPagamento = () => {
      valorv.value = true;
      pagamentov.value = true;
      if (pagamento.value.tipo_pagamento == "1X") {
        valor_total.value = "R$ 35,50";
      } else if (pagamento.value.tipo_pagamento == "2X") {
        valor_total.value = "R$ 35,75";
      } else if (pagamento.value.tipo_pagamento == "3X") {
        valor_total.value = "R$ 36,10";
      } else if (pagamento.value.tipo_pagamento == "4X") {
        valor_total.value = "R$ 36,30";
      } else if (pagamento.value.tipo_pagamento == "5X") {
        valor_total.value = "R$ 36,53";
      } else if (pagamento.value.tipo_pagamento == "6X") {
        valor_total.value = "R$ 36,87";
      } else if (pagamento.value.tipo_pagamento == "7X") {
        valor_total.value = "R$ 37,12";
      } else if (pagamento.value.tipo_pagamento == "8X") {
        valor_total.value = "R$ 37,43";
      } else if (pagamento.value.tipo_pagamento == "9X") {
        valor_total.value = "R$ 37,86";
      } else if (pagamento.value.tipo_pagamento == "10X") {
        valor_total.value = "R$ 38,25";
      } else if (pagamento.value.tipo_pagamento == "11X") {
        valor_total.value = "R$ 38,75";
      } else if (pagamento.value.tipo_pagamento == "12X") {
        valor_total.value = "39,25";
      }
    };
    const selecionandoTipoPagamentoPix = () => {
      if (pagamento.value.tipo_pagamento_pix == "tel") {
        valorv.value = true;
        valor_total.value = "32,50";
      } else {
        valorv.value = true;
        valor_total.value = "32,50";
      }
    };
    const metodoTravaInfoCliente = () => {
      if (
        form.value.nome &&
        form.value.email &&
        form.value.celular &&
        form.value.telefone
      ) {
        travaInfo.value = true;
      } else {
        MsgInfoIncompleto();
      }
    };
    const metodoTravaEndCliente = () => {
      if (
        end.value.cep &&
        end.value.bairro &&
        end.value.logradouro &&
        end.value.localidade &&
        end.value.uf &&
        end.value.numero &&
        end.value.complemento
      ) {
        travaEnd.value = true;
      } else {
        MsgEndIncompleto();
      }
    };
    const metodoTravaPagCliente = () => {
      // Se for PIX
      if (pixv.value) {
        console.log(pagamento.value.tipo_pagamento_pix);
        if (
          pagamento.value.tipo_pagamento_pix == "qr" ||
          pagamento.value.tipo_pagamento_pix == "tel"
        ) {
          travaPag.value = true;
        } else {
          MsgSelecionePag();
          return;
        }
      } // se for Boleto
      else if (boletov.value) {
        travaPag.value = true;
      } // se for Credito
      else if (creditov.value) {
        if (
          pagamento.value.bandeira &&
          pagamento.value.titular &&
          pagamento.value.numeros &&
          pagamento.value.cvv
        ) {
          travaPag.value = true;
        } else {
          MsgPagIncompleto();
          return;
        }
      } // se for Debito
      else {
        if (
          pagamento.value.bandeira &&
          pagamento.value.titular &&
          pagamento.value.numeros &&
          pagamento.value.cvv
        ) {
          travaPag.value = true;
        } else {
          MsgPagIncompleto();
          return;
        }
      }
    };
    const perguntaSeCompra = () => {
      $q.dialog({
        title: "Efetuar Compra",
        message: "Deseja efetuar compra?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        metodoComprar();
      });
    };
    const metodoComprar = () => {
      if (pagamento.value.forma_pagamento == "1") {
        MsgSucessoCompraCredito();
        dialogCredito.value = true;
      } else if (pagamento.value.forma_pagamento == "2") {
        MsgSucessoCompraDebito();
        dialogDebito.value = true;
      } else if (
        pagamento.value.forma_pagamento == "3" &&
        pagamento.value.tipo_pagamento_pix == "tel"
      ) {
        MsgSucessoCompraPIX();
        dialogPixTel.value = true;
      } else if (
        pagamento.value.forma_pagamento == "3" &&
        pagamento.value.tipo_pagamento_pix == "qr"
      ) {
        MsgSucessoCompraPIX();
        dialogPixQR.value = true;
      } else if (pagamento.value.forma_pagamento == "4") {
        MsgSucessoCompraBoleto();
        dialogBoleto.value = true;
      }
    };

    return {
      valor_total,
      endereco,
      formaPagamentoOptions,
      pagamentoCredito,
      pagamentoPIX,
      pagamentov,
      creditov,
      boletov,
      pixv,
      debitov,
      valorv,
      buscarCEP,
      MsgCepIncorreto,
      MsgSucesso,
      limparEndereco,
      selecionandoFormaPagamento,
      selecionandoTipoPagamento,
      selecionandoTipoPagamentoPix,
      limparPagamento,
      pagamento1,
      pagamento2,
      pagamento3,
      pagamento4,
      metodoTravaInfoCliente,
      metodoTravaEndCliente,
      metodoTravaPagCliente,
      MsgInfoIncompleto,
      MsgEndIncompleto,
      MsgPagIncompleto,
      MsgTipoPagProducao,
      MsgSucessoCompraCredito,
      MsgSucessoCompraDebito,
      MsgSucessoCompraPIX,
      MsgSucessoCompraBoleto,
      MsgSelecionePag,
      metodoComprar,
      perguntaSeCompra,
      cartaoOptions,
      travaInfo,
      travaEnd,
      travaPag,
      form,
      end,
      pagamento,
      pag_alternativo,
      dialogPixTel,
      dialogPixQR,
      dialogCredito,
      dialogDebito,
      dialogBoleto,
      pagarv,
      fretev,
      frete,
    };
  },
});
</script>
