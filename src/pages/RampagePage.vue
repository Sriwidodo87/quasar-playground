<script setup>
import {
  mdiBook,
  mdiEmail,
  mdiFileDocument,
  mdiPlus,
  mdiInformationBoxOutline,
  mdiFormatFont,
  mdiHome,
  mdiArrowRight,
  mdiMinus,
  mdiCalendar,
  mdiClock,
  mdiFlag,
  mdiDelete,
  mdiCheck,
} from "@quasar/extras/mdi-v7";
import { api } from "src/boot/wretch";
import { ref } from "vue";
const content = ref("");
const showDialog = ref(false);
//const slide = ref(1);
const todos = ref([])
const posts = ref([])


async function getTodos() {
  todos.value = await api.get('todos').json()

}
getTodos()
// const selected = ref([])


async function getPosts(page) {
  const data = await api
  .get(`posts?_page=${page}`)
  .json()
  posts.value =[...posts.value,...data]
}
 getPosts(1)
const columns=[
  {
    name:'expand',
    label:'Expand',
    align:'center'
  },
  {
    name:'title',
    field:'title',
    label:'Title',
    align:'left'
  },
  {
    name:'completed',
    field:'completed',
    label:'Completed',
    align:'left'
  }
]

const expanded = ref([])

const dateTime = ref()
const dateTimeMask='YYYY-MM-DD HH:mm'

const  refreshing = ref(false)
function refresh () {

  refreshing.value = true
  setTimeout(()=>
{
  refreshing.value= false

},1500)
}

const visible = ref(false)
</script>

<template>
  <q-page padding>
    <q-infinite-scroll
      :disable="posts.length >=20"
      :offset="250"
      @load="async(Index,done)=>{
        await getPosts(Index+1)
        done()
      }"
    >
      <template #loading>
        <div class=" flex flex-center">
          <q-spinner
            color="primary"
            size="40px"
          />
        </div>
      </template>

      <div
        v-for="post in posts"
        :key="post.id"
        class="q-mb-lg"
      >
        <q-card>
          <q-card-section>
            <h2 class="q-my-none">
              {{ post.title }}
            </h2>
          </q-card-section>
          <q-card-section class="text-bodyl text-blue-grey-10">
            {{ post.body }}
          </q-card-section>
        </q-card>
      </div>
    </q-infinite-scroll>
    <!--    <q-card style="width: 400px;">
      <q-scroll-area style="height:300px;">
        <q-card-section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse architecto necessitatibus, deserunt provident consequuntur fuga ratione quibusdam odio quasi eligendi aliquam molestiae magnam nesciunt deleniti perferendis sapiente pariatur voluptatibus explicabo!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse architecto necessitatibus, deserunt provident consequuntur fuga ratione quibusdam odio quasi eligendi aliquam molestiae magnam nesciunt deleniti perferendis sapiente pariatur voluptatibus explicabo!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse architecto necessitatibus, deserunt provident consequuntur fuga ratione quibusdam odio quasi eligendi aliquam molestiae magnam nesciunt deleniti perferendis sapiente pariatur voluptatibus explicabo!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse architecto necessitatibus, deserunt provident consequuntur fuga ratione quibusdam odio quasi eligendi aliquam molestiae magnam nesciunt deleniti perferendis sapiente pariatur voluptatibus explicabo!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse architecto necessitatibus, deserunt provident consequuntur fuga ratione quibusdam odio quasi eligendi aliquam molestiae magnam nesciunt deleniti perferendis sapiente pariatur voluptatibus explicabo!
        </q-card-section>
      </q-scroll-area>
    </q-card> -->
  <!--   <q-list bordered>
      <q-slide-item
        right-color="red"
        left-color="grey"
        @left="({reset})=>reset()"
        @right="({reset})=>reset()"
      >
        <template #right>
          <q-icon :name="mdiDelete" />
        </template>
        <template #left>
          <q-icon :name="mdiCheck" />
        </template>
        <q-item>
          <q-item-section avatar>
            <q-icon
              color="blue"
              :name="mdiEmail"
            />
          </q-item-section>
          <q-item-section> hey bob, I have mews</q-item-section>
          <q-item-section side>
            <q-chip
              :icon="mdiFlag"
              label="Flagged"
              color="indigo"
              text-color="white"
            />
          </q-item-section>
        </q-item>
      </q-slide-item>
    </q-list> -->
    <!--  <q-toggle
      v-model="visible"
      label="Visible"
    />
    <q-slide-transition>
      <div v-show="visible">
        <img src="https://picsum.photos/600">
      </div>
    </q-slide-transition>
    <h1> TEST PAGE</h1> -->
    <!-- <q-card
      class="my-card"
      style="max-width: 300px;"
    >
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>

      <q-card-action>
        <q-btn
          flat
          label="refreshing"
          :loading="refreshing"
          @click="refresh()"
        />
      </q-card-action>
      <q-inner-loading :showing="refreshing">
        <q-spinner-gears
          size="50px"
          color="primary"
        />
      </q-inner-loading>
    </q-card> -->
  <!--   <q-pull-to-refresh
      color="primary"
      @refresh="refresh"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam dolorum aliquid sint ipsam minima ut minus hic quam odio sunt nesciunt! Voluptas tempora deleniti quaerat doloribus eaque magnam!
    </q-pull-to-refresh> -->
    <!-- <q-input
      v-model="dateTime"
      filled
      label="Date Time"
    >
      <template #prepend>
        <q-icon
          :name="mdiCalendar"
          class="cursor-pointer"
        >
          <q-popup-proxy cover>
            <q-date
              v-model="dateTime"
              :mask="dateTimeMask"
            >
              <q-btn
                v-close-popup
                label="Close"
                class="full-width"
                color="primary"
                unelevated
              />
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template #append>
        <q-icon
          :name="mdiClock"
          class="cursor-pointer"
        >
          <q-popup-proxy cover>
            <q-time
              v-model="dateTime"
              :mask="dateTimeMask"
            >
              <q-btn
                v-close-popup
                label="Close"
                class="full-width"
                color="primary"
                unelevated
              />
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input> -->
    <!--  <q-table
      v-model:expanded="expanded"
      :columns
      :rows="todos"
    >
      <template
        #body="scope"
      >
        <q-tr :props="scope">
          <q-td
            key="expand"
            :props="scope"
          >
            <q-btn
              size="sm"
              round
              flat
              :icon="scope.expand ? mdiMinus : mdiPlus"

              @click="scope.expand = !scope.expand"
            />
          </q-td>
          <q-td
            key="title"
            :props="scope"
          >
            {{ scope.row.title }}
          </q-td>

          <q-td
            key="completed"
            :props="scope"
          >
            <q-checkbox
              v-model="scope.row.completed"
            />
          </q-td>
        </q-tr>
        <q-tr
          v-show="scope.expand"
          :props="scope"
        >
          <q-td colspan="100%">
            <pre>{{ scope.row }}</pre>
          </q-td>
        </q-tr>
      </template>
    </q-table> -->
    <!--   <q-carousel
      v-model="slide"
      swipeable
      animated
      infinite
      thumbnails
    >
      <q-carousel-slide
        :name="1"
        img-src="https://picsum.photos/900/600"
      >
        <div
          class="absolute-top flex flex-center q-pa-lg"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://picsum.photos/900"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://picsum.photos/901"
      />
    </q-carousel> -->
    <!--   <q-breadcrumbs>
      <template #separator>
        <q-icon size="1.2pm" color="blue-grey-10" :name="mdiArrowRight" />
      </template>
      <q-breadcrumbs-el label="Home" :icon="mdiHome" />
      <q-breadcrumbs-el label="Components" :icon="mdiwidgets" />
      <q-breadcrumbs-el label="breadcrumbs" />
    </q-breadcrumbs> -->
    <!-- <pre>{{ content }}</pre> -->
    <!-- <q-editor
      v-model="content"
      toolbar-rounded
      content-class="bg-amber-3"
      toolbar-bg="amber-10"
      toolbar-text-color="white"
      style="max-width: 600px"
      class="full-width"
      :toolbar="[
        ['bold', 'italic', 'underline'],
        [{ icon: mdiFormatFont, options: ['p', 'h3', 'h4', 'h5', 'h6', 'code'] }],
      ]"
    /> -->

    <!--  <q-intersection
      v-for="index in 400"
      :key="index"
      style="width: 200px; height: 300px"
      transition="scale"
    >
      <img src="https://picsum.photos/id/237/200/300" />
    </q-intersection> -->
    <!-- <q-circular-progress
      :value="100"
      :min="0"
      :max="200"
      size="100px"
      color="cyan"
      center-color="cyan-1"
      track-color="cyan-2"
      show-value=""
    >
      <q-chip :label="100" text-color="white" color="cyan" />
    </q-circular-progress> -->

    <!-- <q-page-sticky position="bottom-right" :offset="[28, 28]">
      <q-fab :icon="mdiPlus" color="primary" fab direction="up">
        <q-fab-action
          :icon="mdiEmail"
          color="blue"
          external-label
          label="Email"
          label-position="left"
        />
        <q-fab-action
          :icon="mdiFileDocument"
          color="grey"
          external-label
          label="Document"
          label-position="left"
        />
        <q-fab-action
          :icon="mdiBook"
          color="black"
          external-label
          label="Book"
          label-position="left"
        />
      </q-fab>
    </q-page-sticky> -->

    <!-- <q-spinner-hearts color="primary" size="xl" /> -->
    <!-- <q-banner class="bg-secondary text-white">
      <template #avatar>
        <q-avatar color="white" text-color="grey-10" :icon="mdiInformationBoxOutline" />
      </template>
      We can't save uur friend until you sign in ...
      <template #action>
        <q-btn label="Sign In" color="white" text-color="grey-10" />
        <q-btn label="Dismiss" flat color="white" text-color="grey-10" />
      </template>
    </q-banner> -->
    <!-- <q-card>
      <q-card-section>
        <h5>Title</h5>
        <q-separator color="blue" size="4px" />
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem
        consequatur maiores. Cupiditate, adipisci vero exercitationem ipsum distinctio
        possimus ea laboriosam incidunt perferendis vitae dignissimos quod quo eos cum
        similique.
      </q-card-section>
    </q-card> -->
  </q-page>
</template>
