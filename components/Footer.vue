<template>
  <footer class="font-semibold text-white bg-secondary-darkgreen text-tiny leading-xl">
    <div class="flex flex-col items-center py-16">
      <img class="w-20" src="~/assets/svg/logo.svg" alt="myteam" />
      <nav class="pt-5">
        <ul class="flex justify-between w-24">
          <li>
            <a class="hover:text-lightcoral focus:text-lightcoral focus:outline-none focus:shadow-outline" href="#">home</a>
          </li>
          <li>
            <a class="hover:text-lightcoral focus:text-lightcoral focus:outline-none focus:shadow-outline" href="#">about</a>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col items-center pt-5 opacity-60">
        <p>987 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California 92714</p>
        <p>Call Us: <a class="focus:outline-none focus:shadow-outline" href="tel:979-833-7432">979-833-7432</a></p>
      </div>
      <div class="flex flex-col pt-5">
        <ul class="flex justify-between w-24 mx-auto">
          <li>
            <a class="focus:outline-none focus:shadow-outline" href="#">
              <img src="~/assets/svg/icon-facebook.svg" alt="facebook">
            </a>
          </li>
          <li>
            <a class="focus:outline-none focus:shadow-outline" href="#">
              <img src="~/assets/svg/icon-pinterest.svg" alt="pinterest">
            </a>
          </li>
          <li>
            <a class="focus:outline-none focus:shadow-outline" href="#">
              <img src="~/assets/svg/icon-twitter.svg" alt="twitter">
            </a>
          </li>
        </ul>
        <p class="pt-5 opacity-60">Copyright 2020. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
