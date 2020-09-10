<template>
   <div>
      <NavBar />
      <div class="card col-2 mr-3 mb-3 pt-3" v-for="personagem in MarvelAPI" :key="personagem.id"></div>
      <hr />
      <input type="text" v-on:keydown.enter="alert($event.target.value)" />
      <br />
      {{texto}}
   </div>
</template>

<script>
import NavBar from "@/views/components/NavBar";
export default {
   name: "Home",
   components: {
      NavBar,
   },
};
</script>
