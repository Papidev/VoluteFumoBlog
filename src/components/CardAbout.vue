<template>
  <card>
    <div class="flex flex-col items-center">
      <g-image
        src="@/assets/img/Volute_logo.png"
        alt="Volute di Fumo logo"
        class="h-32 w-32 logo-round-orange mt-6"
      />
      <div class="flex flex-col items-center px-8 py-3">
        <h1 class="text-2xl text-chica-dark tracking-wide font-bold mt-2">
          Volute di Fumo
        </h1>
        <p
          class="mt-3 text-justify text-lg text-chica-dark subpixel-antialiased tracking-tight"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <div
          class="flex flex-col items-center w-full py-4 mt-6 rounded-lg dashed-box border-chica-orange bg-chica-light-yellowish"
        >
          <h2 class="text-lg text-chica-orange font-bold">Social</h2>

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
          <h2 class="text-lg text-chica-orange font-bold">Contatti</h2>
          <div class="flex mt-1">
            <contact
              v-for="contact in contacts"
              :key="contact.id"
              :name="contact.name"
              :link="contact.link"
              class="mr-2 w-6 h-6 fill-current text-chica-dark"
            />
            <div class="text-chica-dark">
              volute@gmail.com
            </div>
          </div>
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
