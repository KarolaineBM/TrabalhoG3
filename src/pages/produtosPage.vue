<template>
  <q-page>
    <div class="row q-mt-md">
      <q-space></q-space>
      <div class="col-md-6">
        <q-input dense outlined rounded label="pesquisar">
          <template v-slot:append> <q-icon name="search" /> </template
        ></q-input>
      </div>
      <q-space></q-space>
    </div>
    <div v-if="carrinho">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="shopping_cart" color="accent" />
      </q-page-sticky>
    </div>
    <span class="row text-h6 q-ml-xl q-mt-md">Defina sua busca:</span>
    <div class="row q-col-gutter-x-sm q-mt-md">
      <div class="col-md-2 q-ml-xl">
        <q-select
          dense
          outlined
          label="Tipo"
          v-model="filtro1"
          :options="filtro_options1"
          @update:model-value="selecionandoFiltro1()"
          option-value="id"
          option-label="nome"
          emit-value
          map-options
        ></q-select>
      </div>
      <div class="col-md-2">
        <q-select
          dense
          outlined
          label="Sabor"
          v-model="filtro2"
          :options="filtro_options2"
          @update:model-value="selecionandoFiltro2()"
          option-value="id"
          option-label="nome"
          emit-value
          map-options
        ></q-select>
      </div>
      <div class="col-md-2">
        <q-select
          dense
          outlined
          label="Valor"
          v-model="filtro3"
          :options="filtro_options3"
          option-value="id"
          option-label="nome"
          emit-value
          map-options
        ></q-select>
      </div>
    </div>

    <div class="q-ml-xl">
      <div v-if="doces">
        <div class="col q-pa-sm q-mt-md q-mb-md">
          <span class="row text-h5">Doces</span>
          <hr />
        </div>
        <div class="row q-pa-md">
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/Carolina1.png" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                ></q-btn>

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Carolinas</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor1 }}・Chocolate e Doce de Leite
                </div>
                <div class="text-caption text-grey">
                  Uma porção com quatro Carolinas, cobertas com chocolate ao
                  leite, e recheadas de um doce de leite maravilhoso.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/brigadeiro-gourmet.png" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Brigadeiros</div>
                </div>

                <q-rating v-model="stars5" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor2 }}・Chocolate,Ninho,Granulado
                </div>
                <div class="text-caption text-grey">
                  Porção de quatro brigadeiros de sabor a sua escolha, uma
                  delícia em qualquer hora e em qualquer lugar.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/Brownies.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Brownies</div>
                </div>

                <q-rating v-model="stars3" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor3 }}・Chocolate</div>
                <div class="text-caption text-grey">
                  Porção de três Brownies deliciosamente macios e saborosos,
                  perfeitos para aquele dia especial hein?.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/Cannoli.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Cannolis</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor4 }}・Baunilha,Chocolate,Granola
                </div>
                <div class="text-caption text-grey">
                  Porção de quatro cannolis com massa crocante,recheados com
                  baunilha e diversos sabores a sua escolha.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div v-if="bolos">
        <div class="col q-pa-sm q-mt-md q-mb-md">
          <span class="row text-h5">Bolos</span>
          <hr />
        </div>
        <div class="row q-pa-md">
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/bolo-chocolate.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo de Chocolate</div>
                </div>

                <q-rating v-model="stars3" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor5 }}・Chocolate</div>
                <div class="text-caption text-grey">
                  Bolo de chocolate coberto por pedaços de kitkat, recheio em
                  camadas e massa molhadinha pronta para preencher você de
                  sabores.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/bolo-morango.png" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo de Morango</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor6 }}・Morango, Baunilha
                </div>
                <div class="text-caption text-grey">
                  Bolo saboroso de morango, com uma massa apaixonante de
                  baunilha e leite ninho, coberto por morangos da melhor
                  qualidade, simplesmente uma maravilha.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/bolo-coco.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo de Coco</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor7 }}・Cenoura, Coco</div>
                <div class="text-caption text-grey">
                  Bolo com massa de cenoura, cobertura de coco ralado e camadas
                  de cheesecake, uma delícia aos olhares e muito mais a quem
                  encomende.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/bolo-red-velvet.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="velvet = true"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo Red Velvet</div>
                </div>

                <q-rating v-model="stars5" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor8 }}・Cereja, Cheesecake
                </div>
                <div class="text-caption text-grey">
                  Bolo red velvet, massa molhadinha e macia de sabor cereja, com
                  cobertura de cheesecake e lascas de chocolate branco,
                  vislumbrante e completamente delicioso.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div v-if="sobremesas">
        <div class="col q-pa-sm q-mt-md q-mb-md">
          <span class="row text-h5">Sobremesas</span>
          <hr />
        </div>
        <div class="row q-pa-md">
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets\petit_gateau.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Petit Gateau</div>
                </div>

                <q-rating v-model="stars3" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor9 }}・Chocolate, Sorvete
                </div>
                <div class="text-caption text-grey">
                  Uma porção contendo dois Pettit gateau deliciosos com recheio
                  a escolha, acompanha uma bola de sorvete de baunilha.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/bolo-de-pote.png" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo de pote</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  R${{ valor10 }}・Chocolate,Morango,Abacaxi
                </div>
                <div class="text-caption text-grey">
                  Bolos de pote dos mais diversos, unicamente saborosos,
                  cobertura e recheio a escolha.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/mousse-cuja.png" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Mousse de Maracujá</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor11 }}・Maracujá</div>
                <div class="text-caption text-grey">
                  Mousse cremosos e delicioso de maracujá, perfeito para
                  qualquer ocasião, deixando carinho e amor por onde passa.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3">
            <q-card class="my-card">
              <q-img src="~assets/tartelette_limão.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="add_shopping_cart"
                  @click="perguntaSeAdicionaCarrinho()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />
                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Tortinhas de Limão</div>
                </div>

                <q-rating v-model="stars3" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor12 }}・Limão</div>
                <div class="text-caption text-grey">
                  Porção contendo três mini tortinhas de limão,tornam juntas o
                  agradável e saboroso em algo especial.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <q-card class="q-pa-sm q-mt-md" v-if="velvet">
      <div
        class="row q-pa-md justify-center full-height full-width text-center"
      >
        <div class="col-md-2">
          <div
            class="row q-mt-lg column justify-center text-center q-col-gutter-y-sm"
          >
            <div class="col-md q-mt-md">
              <q-img
                src="~assets\bolo-red-velvet.jpg"
                style="
                  height: 140px;
                  max-width: 150px;
                  box-shadow: -5px 5px 5px lightblue;
                "
              >
              </q-img>
            </div>
            <div class="col-md">
              <q-img
                src="~assets\bolo-red.png"
                style="
                  height: 140px;
                  max-width: 150px;
                  box-shadow: -5px 5px 5px lightblue;
                "
              />
            </div>
            <div class="col-md">
              <q-img
                src="~assets\red-velvet-slice.png"
                style="
                  height: 140px;
                  max-width: 150px;
                  box-shadow: -5px 5px 5px lightblue;
                "
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 q-mt-xl">
          <q-card class="q-pa-sm">
            <img
              src="~assets\bolo-red.png"
              style="width: 410px; height: 422px"
            />
          </q-card>
        </div>

        <div class="col-md-3">
          <div class="row q-mt-xl column justify-center text-center">
            <q-card class="q-pa-md">
              <div class="col-md">
                <h4>Bolo de Fubá</h4>
              </div>
              <div class="col-md q-mb-md">
                <q-rating v-model="stars" :max="5" size="32px" />
              </div>
              <div class="col-md text-caption text-grey">
                E modestia parte o bolo de fubá é um dos mais solicitados em
                nossa confeiteria, macio, saboroso e maravilhoso, simplesmente
                irrecusável...
              </div>
              <div class="col-md q-mt-md">
                <div class="row flex justify-center text-center">
                  <div class="col-md-2">
                    <q-input
                      v-model="qtd"
                      outlined
                      dense
                      type="number"
                      label="Qtd."
                    ></q-input>
                  </div>
                  <div class="col-md-3 q-ml-sm">
                    <q-input
                      v-model="valor"
                      dense
                      outlined
                      label="valor"
                      mask="#.###"
                      reverse-fill-mask
                    ></q-input>
                  </div>
                </div>
              </div>
              <div class="col-md q-mt-lg">
                <q-btn
                  icon="local_mall"
                  color="primary"
                  to="/pagamento"
                  label="Encomende Aqui"
                  no
                  caps
                ></q-btn>
              </div>
              <div class="col-md q-mt-md">
                <q-btn
                  icon="call"
                  color="green"
                  to="/produtos"
                  label="Encomende via Whatsapp"
                  no
                  caps
                ></q-btn>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

<script>
import { useQuasar, Notify } from "quasar";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "produtosPage",

  setup() {
    // Variáveis
    const velvet = ref(false);
    // teste
    const $q = useQuasar();
    const valor1 = ref("5,25");
    const valor2 = ref("6,00");
    const valor3 = ref("8,00");
    const valor4 = ref("5,00");
    const valor5 = ref("85,00");
    const valor6 = ref("125,00");
    const valor7 = ref("100,00");
    const valor8 = ref("145,00");
    const valor9 = ref("8,00");
    const valor10 = ref("6,00");
    const valor11 = ref("6,20");
    const valor12 = ref("5,50");
    const carrinho = ref(false);
    const doces = ref(false);
    const bolos = ref(false);
    const sobremesas = ref(false);
    const filtro1 = ref(null);
    const filtro2 = ref(null);
    const filtro3 = ref(null);
    const filtro_options1 = ref([
      { id: "1", nome: "Doces" },
      { id: "2", nome: "Bolos" },
      { id: "3", nome: "Sobremesas" },
    ]);
    const filtro_options2 = ref([
      { id: "1", nome: "Chocolate" },
      { id: "2", nome: "Morango" },
      { id: "3", nome: "Baunilha" },
      { id: "4", nome: "Limão" },
    ]);
    const filtro_options3 = ref([
      { id: "1", nome: "R$ 12-20" },
      { id: "2", nome: "R$ 30-50" },
      { id: "3", nome: "R$ 70-100" },
      { id: "4", nome: "R$ 120-160" },
    ]);

    //

    // Métodos
    const selecionandoFiltro1 = () => {
      console.log(filtro1.value);
      if (filtro1.value == "1") {
        doces.value = true;
        bolos.value = false;
        sobremesas.value = false;
      } else if (filtro1.value == "2") {
        bolos.value = true;
        sobremesas.value = false;
        doces.value = false;
      } else {
        sobremesas.value = true;
        bolos.value = false;
        doces.value = false;
      }
    };
    const selecionandoFiltro2 = () => {
      console.log(filtro2.value);
    };

    const perguntaSeAdicionaCarrinho = () => {
      $q.dialog({
        title: "Adicionar ao Carrinho",
        message: "Deseja adicionar item ao carrinho?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        MsgSucesso();
        carrinho.value = true;
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
        message: "Item adicionado ao carrinho!",
      });
    };

    return {
      slide: ref(1),
      autoplay: ref(true),
      stars: ref(4),
      stars3: ref(3),
      stars5: ref(5),
      valor1,
      valor2,
      valor3,
      valor4,
      valor5,
      valor6,
      valor7,
      valor8,
      valor9,
      valor10,
      valor11,
      valor12,
      filtro1,
      filtro2,
      filtro3,
      filtro_options1,
      filtro_options2,
      filtro_options3,
      selecionandoFiltro1,
      selecionandoFiltro2,
      perguntaSeAdicionaCarrinho,
      MsgSucesso,
      bolos,
      doces,
      sobremesas,
      carrinho,
      velvet,
    };
  },
});
</script>
