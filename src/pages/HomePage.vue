<template>
  <q-page>
    <q-card>
      <div class="q-pa-xl">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="~assets/carrosel1.png">
            <div class="row absolute-center column">
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl"></div>
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl">
                <q-btn
                  icon="local_mall"
                  color="green"
                  to="/produtos"
                  label="Encomende Aqui"
                  no
                  caps
                ></q-btn>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="~assets/carrosel2.png">
            <div class="row absolute-center column">
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl"></div>
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl">
                <q-btn
                  icon="local_mall"
                  color="green"
                  to="/produtos"
                  label="Encomende Aqui"
                  no
                  caps
                ></q-btn>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="~assets/carrosel3.png">
            <div class="row absolute-center column">
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl"></div>
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl">
                <q-btn
                  icon="local_mall"
                  color="green"
                  to="/produtos"
                  label="Encomende Aqui"
                  no
                  caps
                ></q-btn>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" img-src="~assets/carrosels5.jpg">
            <div class="row absolute-center column">
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl"></div>
              <div class="col-md q-ml-sm q-mt-xl q-pt-xl">
                <q-btn
                  icon="local_mall"
                  color="green"
                  to="/produtos"
                  label="Encomende Aqui"
                  no
                  caps
                ></q-btn>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </q-card>
    <div class="row justify-center full-height full-width text-center">
      <div class="col-md">
        <img
          src="~assets\output-onlinepngtools.png"
          style="max-width: 675px; height: auto"
        />
      </div>
    </div>
    <div class="row flex q-pa-xl q-mt-xl">
      <div class="col-md">
        <img
          src="~assets\comendoBolo.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
      <div class="col-md q-mt-xl q-mr-lg">
        <div class="row column">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Ei! voc?? ai!, j?? se perguntou qual foi a ??ltima vez que voc??
                experimentou uma fatia de um bom bolo?, foi no anivers??rio de
                fulano?, ou na hora de quebrar a dieta?, bom talvez nenhum nem
                outro, mas aposto que marcou presen??a na sua mem??ria!.</span
              >
            </q-card>
          </div>
          <div class="col-md q-mt-xl">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Bom, se deixou saudade, ?? porque vale uma segunda vez n??o?, e
                que tal um bolo macio, com recheio e sabor dos mais diversos,
                enfeitado e confeitado a m??o e num precinho muito favor??vel aos
                demais...hmm ?? isso ai, aposto que adorou a ideia.</span
              >
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row flex q-pa-xl q-mt-xl">
      <div class="col-md q-mt-xl q-mr-lg">
        <div class="row column">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Ficar?? de queixo ca??do com o que temos para voc??, vai ai uma
                fatia de baunilha com ganache?, ou que tal nossa receita
                maravilhosa de bolo de <b style="color: #ff3333">morango</b> com
                chantilly cremoso?, hmm... uma maravilha!, psst! fica s?? entre
                n??s hein.. sou apaixonado pelo
                <b style="color: #ff3333">red velvet.</b></span
              >
            </q-card>
          </div>
          <div class="col-md q-mt-xl">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Entendo, talvez bolo n??o seja seu ponto fraco, pois bem...
                est??mos preparados para isso tamb??m haha!, temos, doces,
                sobremesas, cupcakes, brownies, brigadeiros e muito mais!. Seja
                uma ocasi??o especial, um presente para outro ou si mesmo,a
                <b style="color: #ff4aff">Graci Barros Cake</b> est?? aqui para
                ajud??-lo,
                <b style="color: #ff4aff">Graci Barros Cake</b>
                satisfa????o e alegria a qualquer lugar e a todo momento.

                <b></b>
              </span>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-md q-ml-xl q-pl-xl">
        <img
          src="~assets\Bolos.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: -10px 10px 5px lightblue;
          "
        />
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row justify-center full-height full-width text-center q-mt-xl">
      <div class="col-md">
        <img
          src="~assets\Confeiteira.png"
          style="max-width: 400px; height: auto"
        />
      </div>
      <div class="col-md">
        <img
          src="~assets\Cupcakes.jpg"
          style="max-width: 400px; height: 265px"
        />
      </div>
      <div class="col-md">
        <img
          src="~assets\PessoasEBolo.jpg"
          style="max-width: 400px; height: auto"
        />
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row justify-center full-height full-width text-center">
      <div class="col-md bg">
        <h4
          style="
            background-color: #2a2a2a;
            color: #ffffff;

            text-shadow: 2px 2px #000000;
            text-transform: uppercase;
            font-weight: bold;
          "
        >
          -Acesse Tamb??m-
        </h4>
      </div>
    </div>
    <div
      class="row justify-center full-height full-width text-center flex q-mt-lg q-col-gutter-x-lg"
    >
      <div class="col-md-3">
        <q-card class="my-card">
          <q-img src="~assets\Sobrenos.png" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="send"
              to="/sobrenos"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Sobre N??s</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
              Ficou interessado em saber mais sobre nossa empresa?, venha
              conhecer nossas origens.
            </div>
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
      <div class="col-md-3">
        <q-card class="my-card">
          <q-img src="~assets\BolosEDoces.jpg" style="max-height: 400px" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="send"
              to="/pagpage"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Produtos</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
              E essa fome ai?, ?? de bolo?, ?? de doce?, ou sobremesa?, clique
              aqui para ver o card??pio.
            </div>
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
      <div class="col-md-3">
        <q-card class="my-card">
          <q-img src="~assets\perguntas-e-respostas.png" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="send"
              to="/perguntas"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Perguntas & Respostas</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
              D??vidas?, perguntas?, veja o quais as perguntas comuns que
              costumam nos fazer.
            </div>
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col"><p></p></div>
    </div>
    <div class="row q-mt-xl">
      <div class="col"><p></p></div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HomePage",
  setup() {
    //
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
