<template>
  <div
    class="flex flex-col items-center bg-yellow-100 overflow-hidden rounded-lg flex-shrink-0 p-1 pb-6"
  >
    ${{ this._uid }}
    <g-image
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="Federica Giustiziero photo"
      class="h-40 w-40 rounded-full m-3"
    />
    <h1 class="tracking-wide font-bold text-lg">
      Federica Giustiziero
    </h1>
    <p class="p-4 text-justify">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
    </p>

    <div
      class="flex flex-col items-center p-3 border-dashed border-4 w-10/12 m-1 rounded-lg"
    >
      <h2>I miei social</h2>

      <div class="flex mt-1">
        <contact
          v-for="social in socials"
          :key="`${_uid}-${social.id}`"
          :name="social.name"
          :link="social.link"
          class="m-1 rounded-lg"
        />
      </div>
      <br />
      <h2>Contatti</h2>
      <div class="flex">
        <contact
          v-for="contact in contacts"
          :key="contact.id"
          :name="contact.name"
          :link="contact.link"
          class="m-1"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Contact from "./Contact";
export default {
  components: {
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
