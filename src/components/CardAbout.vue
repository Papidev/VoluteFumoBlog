<template>
  <card class="p-3">
    <g-image
      src="@/assets/img/Volute_logo.png"
      alt="Federica Giustiziero photo"
      class="h-32 w-32 rounded-full border-2 border-chica-orange m-2"
    />
    <h1 class="tracking-wide font-bold text-lg text-chica-dark mt-4">
      Federica Giustiziero
    </h1>
    <p class="px-4 mt-3 text-justify text-sm">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
    </p>

    <div
      class="flex flex-col items-center p-3 w-10/12 mt-6 rounded-lg dashed-box border-chica-orange"
    >
      <h2 class="text-lg text-chica-orange">Social</h2>

      <div class="flex mt-1">
        <contact
          v-for="social in socials"
          :key="`${_uid}-${social.id}`"
          :name="social.name"
          :link="social.link"
          class="m-1 rounded-lg w-10 h-10"
        />
      </div>
      <br />
      <h2 class="text-lg text-chica-orange">Contatti</h2>
      <div class="flex items-center">
        <contact
          v-for="contact in contacts"
          :key="contact.id"
          :name="contact.name"
          :link="contact.link"
          class="mr-2 w-8 h-8"
        />
        <div>
          volute@gmail.com
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from "./Card";
import Contact from "./Contact";
export default {
  components: {
    Card,
    Contact,
  },
  data() {
    return {
      socials: [
        {
          id: "s1",
          name: "facebook",
          link: "https://it-it.facebook.com/fgiustiziero",
        },
        {
          id: "s2",
          name: "instagram2",
          link: "https://it-it.facebook.com/fgiustiziero",
        },
        {
          id: "s3",
          name: "pinterest",
          link: "https://www.pinterest.it/striapiratesa/",
        },
      ],
      contacts: [
        {
          id: "c1",
          name: "email",
          link: "mailto:federica.giustiziero@gmail.com",
        },
      ],
    };
  },
};
</script>
