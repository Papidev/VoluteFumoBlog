<template>
  <div>
    <a
      target="_blank"
      :href="link"
    ><svg
        
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="svg.viewbox"
      class="m-2 h-8 w-8"
    >
      <title>${{ svg.title }}</title>
      <path
        :d="svg.d"
        :fill="svg.fillColor"
      /></svg>
    </a>
  </div>
</template>
<script>
export default {
    props:{
      svg:{
         type: Object,
         required:true
      },
        
        link:{
             type: String,
             required:true
        }
       
        
        





    }
}
</script>