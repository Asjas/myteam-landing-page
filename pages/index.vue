<template>
  <div>
    <header class="relative bg-midnightgreen">
      <MobileNav />
      <div class="mt-20">
        <h1 class="mx-auto w-56 font-bold text-3xl leading-3xl text-center text-white">
          Find the best
          <span class="text-lightcoral">talent</span>
        </h1>
        <p class="mx-auto pt-6 w-64 font-semibold text-tiny leading-2xl text-center text-white">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </div>
      <div class="flex justify-center">
        <img class="absolute bottom-0" src="~/assets/icons/home-mobile-header.svg" alt />
      </div>
    </header>
  </div>
</template>

<script>
import MobileNav from "~/components/MobileNav.vue";

export default {
  components: {
    MobileNav
  }
};
</script>

<style>
header {
  height: 567px;
}
</style>
