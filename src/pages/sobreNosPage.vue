<template>
  <q-page>
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="~assets\culinaria.jpg" />
        <q-carousel-slide :name="2" img-src="~assets\culinaria2.jpg" />
        <q-carousel-slide :name="3" img-src="~assets\culinaria3.jpg" />
        <q-carousel-slide :name="4" img-src="~assets\culinaria4.jpg" />
      </q-carousel>
    </div>
    <div class="row justify-center full-height full-width text-center q-mt-xl">
      <div class="col-md-6">
        <q-card style="background-color: antiquewhite">
          <span class="text-h4 text-weight-bold">Graci Barros Cakes</span>
        </q-card>
      </div>
    </div>
    <div class="row justify-center full-height full-width text-center q-mt-xl">
      <q-card class="q-pa-md col-md-6" style="background-color: antiquewhite">
        <span class="text-subtittle2 text-weight-bold"
          >Olá, se interessou por nossa empresa?, pois bem... a Graci Barros
          Cakes, é um exemplo dentre as demais confeitarias, temos como
          prioridade o bom serviço, e em suma parte o carinho de vocês, nossos
          clientes. Somos uma empresa dedicada e nossa ambição é ganhar o seu
          reconhecimento e dos demais também, a Graci Barros Cakes é uma empresa
          com 4 anos de experiência e esforço, talentosa e sempre motivada,
          visamos como princípio, quatro pilares, que serviram de alicerce para
          nos moldar ao que somos hoje, abraçamos esses princípios devido aos
          mesmos tornarem nossa tão querida empresa algo único e especial, quase
          como um ponto fora da curva, a Graci Barros Cakes apresentou e
          apresenta até hoje uma nova perspectiva ao público e funcionários,
          somos nosso própio legado e inevitavelmente buscamos conhecimento na
          prática, onde abraçamos conceitos e carinhosamente acolhemos os demais
          gostos.
          <br />
          <br />
          Os 4 pilares que visamos e tornaram a Graci Barros Cakes tão única
          são...
          <br />
          <br />
          - Dedicação
          <br />
          - Aprendizado
          <br />
          - Evolução
          <br />
          - Respeito
          <br />
          <br />
          Sem nossa dedicação, não há aprendizado, sem aprendizado, não há
          evolução e por fim mesmo que tivessemos os três o que seriamos se não
          tivessemos respeito, ao próximos e outrem.
        </span>
      </q-card>
    </div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl">
      <div class="col q-pa-md">
        <span class="text-h4 text-weight-bold">Dedicação</span>
        <hr />
      </div>
    </div>
    <div class="row flex full-height full-width q-mt-xl">
      <div class="col-md q-ml-xl q-mt-lg">
        <img
          src="~assets\confeiteira2.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
      <div class="col-md q-mt-xl q-mr-xl">
        <div class="row column q-col-gutter-y-md">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Dedicação... com dedicação buscamos se referir a um pouco de
                tudo, desde a equipe que faz tudo acontecer, aos que ainda estão
                aprendendo a domar seus instintos, trabalhamos atualmente com um
                time de 15 funcionários, compromissados ao dever de fazer você
                acreditar em nossos sonhos.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Tabalhamos em equipe e damos nosso melhor para tornar seu dia
                mais especial, seja com um cupcake ou um bolo, a emoção que está
                em cada mordida é derivada de nosso suor e dedicação.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Nossa equipe é composta de confeiteiros experientes e
                aprendizes,designers,chefs e entregadores,que visam a melhor
                qualidade e desempenho, todos profissionais, capacitados e
                motivados a dar a você... nosso cliente, uma fatia de
                felicidade.</span
              >
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row flex full-height full-width">
      <div class="col-md q-ml-xl q-mt-lg">
        <img
          src="~assets\confeiteiro.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
      <div class="col-md q-mt-xl q-mr-xl">
        <div class="row column q-col-gutter-y-md">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Não para por ai!, nossa cozinha utiliza utensílios da melhor
                qualidade, somos parceiros de uma das maiores distribuídoras de
                produtos alimentícios, desde frutas fresquinhas a ovos
                produzidos por nossa granja particular, com tanta qualidade,
                fica difícil errar.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Nossa cozinha está sempre higienizada, luvas, redes para cabelo
                e máscaras, são fornecidas e diariamente substituídas e contamos
                com um serviço próprio de entrega, onde não toleramos atrasos,
                prestamos suporte disponível 12h por dia, tudo para fazer seu
                pedido único e especial.</span
              >
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl">
      <div class="col q-pa-md">
        <span class="text-h4 text-weight-bold">Aprendizado</span>
        <hr />
      </div>
    </div>
    <div class="row flex full-height full-width">
      <div class="col-md q-ml-xl q-mt-lg">
        <img
          src="~assets\confeiteiro-estudando.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
      <div class="col-md q-mt-xl q-mr-xl">
        <div class="row column q-col-gutter-y-md">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Em relação ao aprendizado, damos á nossos funcionários suporte
                e bolsas a cursos profissionalizantes de confeitaria aprovados e
                reconhecidos pelo MEC, sendo um deles um curso
                profissionalizante do SENAI, onde damos aos confeiteiros
                realmente dedicados, bolsas de até 50%.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Além dos cursos, nossos profissionais estão sempre positivos
                com relação novos aprendizes dando todo apoio e treinamento
                necessário para que o mesmo tenha o trabalho como uma
                disciplina, dando ênfase no quesito, teoria e prática.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Nossos renomados confeiteiros estão sempre em constante
                aprendizado, damos á eles é dado todo o devido reconhecimento,
                onde todo novo pedido é ensinamento, e uma nova oportunidade de
                se destacar e aprender, os conceitos do aprendizado para nossa
                empresa é cultivar um futuro bom e próspero.</span
              >
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col-md">
        <p></p>
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col-md q-pa-md">
        <span class="text-h4 text-weight-bold">Evolução</span>
        <hr />
      </div>
    </div>
    <div class="row flex full-height full-width">
      <div class="col-md q-mt-xl q-ml-xl">
        <div class="row column q-col-gutter-y-md">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Sim o aprendizado é necessário para construir um bom futuro,
                mas de que futuro estámos falando?, pois bem, não precisamos
                construir a roda se ela já está feita, o que precisamos é
                molda-lá, de acordo com nossas necessidades, essa é a evolução,
                o futuro de que haviamos citado por alto.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >O que faz uma técnica ser melhor que outra?, a velocidade de
                reproduzir?, ou a perfeição para replicar?, nosso mundo está
                repleto de mudanças, o que hoje é bom, amanhã pode já não ser,
                por conta disso abrimos nossas portas á métodos e técnicas
                inovadoras.</span
              >
            </q-card>
          </div>
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Assim como nossos funcionários estão em constante aprendizado,
                aprendemos que a melhor forma de se adaptar ao desconhecido e
                estar apar de mudanças, devido a isto, evoluímos nossas técnicas
                de confeitaria e gastronomia fazendo menção a agradar desde o
                comum ao diferente.</span
              >
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md q-mt-lg q-ml-xl">
        <img
          src="~assets\confeitaria-evolution.png"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
    </div>

    <div class="row q-mt-xl"></div>
    <div class="row q-mt-xl">
      <div class="col q-pa-md">
        <span class="text-h4 text-weight-bold">Respeito</span>
        <hr />
      </div>
    </div>
    <div class="row flex full-height full-width">
      <div class="col-md q-ml-xl q-mt-lg">
        <img
          src="~assets\confeiteiros-amigos.jpg"
          style="
            max-width: 489px;
            height: auto;
            box-shadow: 10px 10px 5px lightblue;
          "
        />
      </div>
      <div class="col-md q-mt-xl q-mr-xl">
        <div class="row column q-col-gutter-y-md">
          <div class="col-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Somos uma equipe e acima de tudo prevalece o respeito, tanto
                como profissonal, quanto como ser humano, fazemos nosso melhor
                porque somos os melhores, mas isso tudo vem graças ao respeito
                que temos de um para todos e de todos para um.</span
              >
            </q-card>
          </div>
          <div class="col-md q-mt-md">
            <q-card class="q-pa-md" style="background-color: antiquewhite">
              <span class="text-subtittle2 text-weight-bold"
                >Não damos liberdade a quaisquer tipo de preconceito ou injuria
                racial dentro de nossa empresa, e somos restritos a estes pontos
                tais quais como nossos próprios princípios, além disto
                acreditamos que independente de nossas indiferenças somos uma
                família, somos gratos por termos uns aos outros e com isso
                abrimos nossas portas calorosamente a você, faça parte desse
                nosso sonho também, essa é nossa
                <b style="color: #ed5458">Graci Barros Cakes</b>.</span
              >
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="col"><p></p></div>
    </div>
    <div class="row q-mt-xl">
      <div class="col"><p></p></div>
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
          - Acesse Também -
        </h4>
      </div>
    </div>
    <div
      class="row justify-center full-height full-width text-center flex q-mt-lg q-col-gutter-x-lg"
    >
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
              Dúvidas?, perguntas?, veja o quais as perguntas comuns que
              costumam nos fazer.
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
              to="/produtos"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Produtos</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
              E essa fome ai?, é de bolo?, é de doce?, ou sobremesa?, clique
              aqui para ver o cardápio.
            </div>
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
      <div class="col-md-3">
        <q-card class="my-card">
          <q-img src="~assets\suporte.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="send"
              to="/faleconosco"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Fale Conosco</div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
              Houve algum problema durante a compra?, precisa de suporte?,
              clique aqui e contate-nos.
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>
