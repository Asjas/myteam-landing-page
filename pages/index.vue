<template>
  <div class="overflow-x-hidden">
    <header class="relative bg-midnightgreen">
      <MobileNav />
      <div class="mt-20">
        <h1 class="w-48 mx-auto text-4xl font-bold text-center text-white leading-4xl">
          Find the best
          <span class="text-lightcoral">talent</span>
        </h1>
        <p class="w-11/12 pt-6 mx-auto font-semibold text-center text-white text-tiny leading-2xl">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </div>
      <div class="flex justify-center pt-40">
        <img class="absolute bottom-0" src="~/assets/svg/home-mobile-header.svg" alt="" />
      </div>
    </header>
    <main>
      <div class="relative pt-12 bg-secondary-sacramentogreen">
        <img class="absolute top-0 left-3/4" src="~/assets/svg/home-mobile-3.svg" alt="" />
        <hr class="w-10 ml-5 border-2 border-lightcoral" />
        <h2 class="w-8/12 pt-8 pl-5 text-3xl font-bold text-white leading-3xl">Build & manage distributed teams like no one else.</h2>
        <Features />
      </div>
      <div class="relative pt-32 bg-secondary-deepjunglegreen">
        <img class="absolute top-0 left-0" src="~/assets/svg/home-mobile-4.svg" alt="" />
        <h2 class="w-11/12 pb-12 mx-auto text-3xl font-bold text-center text-white leading-3xl">Delivering real results for top companies. Some of our <span class="text-secondary-raptureblue">success stories</span>.</h2>
        <SuccessStories />
        <img class="absolute bottom-0 right-0" src="~/assets/svg/home-mobile-5.svg" alt="" />
      </div>
      <Cta />
    </main>
  </div>
</template>

<script>
import MobileNav from "~/components/MobileNav.vue";
import Features from "~/components/Features.vue";
import SuccessStories from "~/components/SuccessStories.vue";
import Cta from "~/components/Cta.vue";

export default {
  components: {
    MobileNav,
    Features,
    SuccessStories,
    Cta
  }
};
</script>

<style>

</style>
