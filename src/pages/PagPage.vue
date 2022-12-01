<template>
  <q-page>
    <div v-if="carrinho">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="shopping_cart" color="accent" />
      </q-page-sticky>
    </div>
    <div class="row q-mt-md">
      <q-space></q-space>
      <div class="col-md-6">
        <q-input dense outlined rounded label="pesquisar">
          <template v-slot:append> <q-icon name="search" /> </template
        ></q-input>
      </div>
      <q-space></q-space>
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
                  @click="metodoCarolinas()"
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
                  Uma porção com três carolinas, cobertas com chocolate ao
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
                  @click="metodoBrigadeiros()"
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
                  @click="metodoBrownies()"
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
                  @click="metodoCannolis()"
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
                  @click="metodoBoloChocolate()"
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
                  @click="metodoBoloMorango()"
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
                  @click="metodoBoloCoco()"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%)"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">Bolo de Coco</div>
                </div>

                <q-rating v-model="stars" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">R${{ valor7 }}・Baunilha, Coco</div>
                <div class="text-caption text-grey">
                  Bolo com massa de baunilha, cobertura de coco ralado e camadas
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
                  @click="metodoBoloVelvet()"
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
                  cobertura de cheesecake e lascas de chocolate
                  branco,vislumbrante e completamente delicioso.
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
                  @click="metodoPetitGateau()"
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
                  Uma porção contendo dois Petit gateau deliciosos com recheio a
                  escolha, acompanha uma bola de sorvete de baunilha.
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
                  @click="metodoBoloPote()"
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
                  cobertura e com recheio a sua escolha, venha experimentar!.
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
                  @click="metodoBoloMousse()"
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
                  @click="metodoBoloTortinhas()"
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
    <q-card class="q-pa-sm q-mt-md" v-if="comprasv">
      <div class="row q-mt-sm justify-center text-center">
        <div class="col"><p></p></div>
      </div>
      <div class="row q-mt-sm justify-center text-center">
        <q-card class="q-pa-md">
          <span class="text-h4 text-weight-medium">Sua Escolha:</span>
        </q-card>
      </div>
      <div
        class="row q-pa-md justify-center full-height full-width text-center"
      >
        <div class="col-md-2">
          <div
            class="row q-mt-lg column justify-center text-center q-col-gutter-y-sm"
          >
            <div class="col-md q-mt-md">
              <q-img
                :src="require(`../assets/${img1}`)"
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
                :src="require(`../assets/${img2}`)"
                style="
                  height: 140px;
                  max-width: 150px;
                  box-shadow: -5px 5px 5px lightblue;
                "
              />
            </div>
            <div class="col-md">
              <q-img
                :src="require(`../assets/${img3}`)"
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
              :src="require(`../assets/${imagem}`)"
              style="width: 422px; height: 423px"
            />
          </q-card>
        </div>

        <div class="col-md-3">
          <div class="row q-mt-xl column justify-center text-center">
            <q-card class="q-pa-md">
              <div class="col-md">
                <h4>{{ titulo }}</h4>
              </div>
              <div class="col-md q-mb-md">
                <q-rating v-model="estrelas" :max="5" size="32px" />
              </div>
              <div class="col-md text-caption text-grey">
                {{ descricao }}
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
                      @update:model-value="selecionadoQTD()"
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
                <div class="row flex justify-center text-center">
                  <div class="col-md-7 q-mr-md">
                    <q-btn
                      icon="local_mall"
                      color="primary"
                      to="/pagamento"
                      label="Encomende Aqui"
                    ></q-btn>
                  </div>
                  <div class="col-md-1 q-mr-lg">
                    <q-btn
                      icon="shopping_cart"
                      color="purple-5"
                      size="md"
                      @click="perguntaSeAdicionaCarrinho()"
                    ></q-btn>
                  </div>
                </div>
              </div>
              <div class="col-md q-mt-md">
                <q-btn
                  icon="call"
                  color="green"
                  href="https://api.whatsapp.com/send?phone=5511974058218"
                  _blanked
                  label="Encomende via Whatsapp"
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
    const comprasv = ref(false);
    // teste
    const $q = useQuasar();
    const titulo = ref("Bolo Red Velvet");
    const descricao = ref(
      "Bolo red velvet, massa molhadinha e macia de sabor cereja, com cobertura de cheesecake e lascas de chocolate branco,vislumbrante e completamente delicioso."
    );
    const qtd = ref(1);
    const valor = ref(0);
    const valores = ref(0);
    const imagem = ref("red-velvet-slice.png");
    const img1 = ref("red-velvet-slice.png");
    const img2 = ref("red-velvet-slice.png");
    const img3 = ref("red-velvet-slice.png");
    const valor1 = ref(5);
    const valor2 = ref(6);
    const valor3 = ref(8);
    const valor4 = ref(5);
    const valor5 = ref(85);
    const valor6 = ref(125);
    const valor7 = ref(100);
    const valor8 = ref(145);
    const valor9 = ref(8);
    const valor10 = ref(6);
    const valor11 = ref(6);
    const valor12 = ref(5);
    const estrelas = ref(0);
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
    const selecionadoQTD = () => {
      console.log(qtd.value);

      if (qtd.value > 0) {
        valor.value = valores.value;
        valor.value = qtd.value * valor.value;
      }
    };
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
    // DOCES
    const metodoCarolinas = () => {
      limparVar();
      titulo.value = "Carolinas";
      descricao.value =
        "Uma porção com três carolinas, cobertas com chocolate ao leite, e recheadas de um doce de leite maravilhoso.";
      imagem.value = "Carolina_venda.jpg";
      img1.value = "carolina-doce.png";
      img2.value = "Carolina1.png";
      img3.value = "carolinas_recheadas.jpg";
      qtd.value = 1;
      valor.value = valor1.value;
      valores.value = valor1.value;
      comprasv.value = true;
      estrelas.value = 4;
    };
    const metodoBrigadeiros = () => {
      limparVar();
      titulo.value = "Brigadeiros";
      descricao.value =
        " Porção de quatro brigadeiros de sabor a sua escolha, uma delícia em qualquer hora e em qualquer lugar.";
      imagem.value = "Brigadeiro-venda.jpg";
      img1.value = "brigadeiros1.jpg";
      img2.value = "brigadeiros2.jpg";
      img3.value = "brigadeiros3.jpg";
      qtd.value = 1;
      valor.value = valor2.value;
      valores.value = valor2.value;
      comprasv.value = true;
      estrelas.value = 5;
    };
    const metodoBrownies = () => {
      limparVar();
      titulo.value = "Brownies";
      descricao.value =
        "Porção de três Brownies deliciosamente macios e saborosos,perfeitos para aquele dia especial hein?.";
      imagem.value = "Brownie-venda.jpg";
      img1.value = "brownies1.jpg";
      img2.value = "brownies2.jpg";
      img3.value = "brownies3.jpg";
      qtd.value = 1;
      valor.value = valor3.value;
      valores.value = valor3.value;
      comprasv.value = true;
      estrelas.value = 3;
    };
    const metodoCannolis = () => {
      limparVar();
      titulo.value = "Canollis";
      descricao.value =
        "Porção de quatro cannolis com massa crocante,recheados com baunilha e diversos sabores a sua escolha.";
      imagem.value = "Cannoli-venda.jpg";
      img1.value = "cannolis1.jpg";
      img2.value = "cannolis2.jpg";
      img3.value = "cannolis3.jpg";
      qtd.value = 1;
      valor.value = valor4.value;
      valores.value = valor4.value;
      comprasv.value = true;
      estrelas.value = 4;
    };
    //

    // BOLOS
    const metodoBoloChocolate = () => {
      limparVar();
      titulo.value = "Bolo de Chocolate";
      descricao.value =
        " Bolo de chocolate coberto por pedaços de kitkat, recheio emcamadas e massa molhadinha pronta para preencher você de sabores.";
      imagem.value = "Bolo-de-chocolate-venda.jpg";
      img1.value = "bolo-de-chocolate1.jpg";
      img2.value = "bolo-de-chocolate2.jpg";
      img3.value = "bolo-de-chocolate3.jpg";
      qtd.value = 1;
      valor.value = valor5.value;
      valores.value = valor5.value;
      comprasv.value = true;
      estrelas.value = 3;
    };
    const metodoBoloMorango = () => {
      limparVar();
      titulo.value = "Bolo de Morango";
      descricao.value =
        "Bolo saboroso de morango, com uma massa apaixonante de baunilha e leite ninho, coberto por morangos da melhorqualidade, simplesmente uma maravilha.";
      imagem.value = "Bolo-de-morango-venda.jpg";
      img1.value = "bolo-de-morango1.jpg";
      img2.value = "bolo-de-morango2.jpg";
      img3.value = "bolo-de-morango3.jpg";
      qtd.value = 1;
      valor.value = valor6.value;
      valores.value = valor6.value;
      comprasv.value = true;
      estrelas.value = 4;
    };
    const metodoBoloCoco = () => {
      limparVar();
      titulo.value = "Bolo de Coco";
      descricao.value =
        "Bolo com massa de baunilha, cobertura de coco ralado e camadas de cheesecake, uma delícia aos olhares e muito mais a quem encomende.";
      imagem.value = "Bolo-de-coco-venda.jpg";
      img1.value = "bolo-de-coco1.jpg";
      img2.value = "bolo-de-coco2.jpg";
      img3.value = "bolo-de-coco3.jpg";
      qtd.value = 1;
      valor.value = valor7.value;
      valores.value = valor7.value;
      comprasv.value = true;
      estrelas.value = 4;
    };
    const metodoBoloVelvet = () => {
      limparVar();
      titulo.value = "Bolo Red Velvet";
      descricao.value =
        " Bolo red velvet, massa molhadinha e macia de sabor cereja, com cobertura de cheesecake e lascas de chocolate branco,vislumbrante e completamente delicioso.";
      imagem.value = "Bolo-red-velvet-venda.jpg";
      img1.value = "bolo-red-velvet1.jpg";
      img2.value = "bolo-red-velvet2.jpg";
      img3.value = "bolo-red-velvet3.jpg";
      qtd.value = 1;
      valor.value = valor8.value;
      valores.value = valor8.value;
      comprasv.value = true;
      estrelas.value = 5;
    };
    //

    // SOBREMESAS
    const metodoPetitGateau = () => {
      limparVar();
      titulo.value = "Petit Gateau";
      descricao.value =
        "Uma porção contendo dois Petit gateau deliciosos com recheio a escolha, acompanha uma bola de sorvete de baunilha.";
      imagem.value = "Petit-gateau-venda.jpg";
      img1.value = "petit-gateau1.jpg";
      img2.value = "petit-gateau2.jpg";
      img3.value = "petit-gateau3.jpg";
      qtd.value = 1;
      valor.value = valor9.value;
      valores.value = valor9.value;
      comprasv.value = true;
      estrelas.value = 3;
    };

    const metodoBoloPote = () => {
      limparVar();
      titulo.value = "Bolo de Pote";
      descricao.value =
        "Bolos de pote dos mais diversos, unicamente saborosos,cobertura e com recheio a sua escolha, venha experimentar!.";
      imagem.value = "Bolo-de-pote-venda.png";
      img1.value = "bolo-de-pote1.jpg";
      img2.value = "bolo-de-pote2.png";
      img3.value = "bolo-de-pote-3.jpg";
      qtd.value = 1;
      valor.value = valor10.value;
      valores.value = valor10.value;
      comprasv.value = true;
      estrelas.value = 4;
    };

    const metodoBoloMousse = () => {
      limparVar();
      titulo.value = "Mousse de Maracujá";
      descricao.value =
        "Mousse cremosos e delicioso de maracujá, perfeito para qualquer ocasião, deixando carinho e amor por onde passa.";
      imagem.value = "Mousse-de-maracuja-venda.jpg";
      img1.value = "mousse-de-maracuja1.jpg";
      img2.value = "mousse-de-maracuja2.jpg";
      img3.value = "mousse-de-maracuja3.jpg";
      qtd.value = 1;
      valor.value = valor11.value;
      valores.value = valor11.value;
      comprasv.value = true;
      estrelas.value = 4;
    };

    const metodoBoloTortinhas = () => {
      limparVar();
      titulo.value = "Tortinhas de Limão";
      descricao.value =
        " Porção contendo três mini tortinhas de limão,tornam juntas o agradável e saboroso em algo especial.";
      imagem.value = "Tortinhas-de-limao-venda.jpg";
      img1.value = "tortinhas-de-limao1.jpg";
      img2.value = "tortinhas-de-limao2.jpg";
      img3.value = "tortinhas-de-limao3.jpg";
      qtd.value = 1;
      valor.value = valor12.value;
      valores.value = valor12.value;
      comprasv.value = true;
      estrelas.value = 3;
    };
    //

    const limparVar = () => {
      titulo.value = "";
      descricao.value = "";
      imagem.value = "";
      img1.value = "";
      img2.value = "";
      img3.value = "";
      qtd.value = 1;
      valor.value = 0;
      valores.value = 0;
      comprasv.value = false;
      estrelas.value = 0;
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
      selecionadoQTD,
      metodoCarolinas,
      metodoBrigadeiros,
      metodoBrownies,
      metodoCannolis,
      metodoBoloChocolate,
      metodoBoloMorango,
      metodoBoloCoco,
      metodoBoloVelvet,
      metodoPetitGateau,
      metodoBoloPote,
      metodoBoloMousse,
      metodoBoloTortinhas,
      limparVar,
      bolos,
      doces,
      sobremesas,
      carrinho,
      comprasv,
      titulo,
      descricao,
      qtd,
      valor,
      valores,
      imagem,
      img1,
      img2,
      img3,
      estrelas,
    };
  },
});
</script>
