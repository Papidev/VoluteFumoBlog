<template>
  <Layout :isHome="true" :img="img">
    <template v-slot:hero> </template>
    <template v-slot:main>
      sbazzeguti
    </template>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Volute di Fumo",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {},
  data() {
    return {
      img: {
        name: "miranda.jpg",
        position: "right top",
      },
    };
  },
};
</script>
