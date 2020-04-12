<template>
  <div
    class="flex flex-col items-center bg-yellow-100 overflow-hidden shadow rounded-lg flex-shrink-0 p-1"
  >
    <g-image
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="Federica Giustiziero photo"
      class="h-40 w-40 rounded-full m-3"
    />

    <div class="p-4 w-full h-72">
      I miei social
      <div class="flex">
        <contact
          v-for="social in socials"
          :key="social.id"
          :name="social.name"
          :link="social.link"
          class="m-1 rounded-lg"
        />
      </div>
      <div class="flex flex-col mt-4">
        Puoi contattarmi anche via mail
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
          name: "instagram",
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
