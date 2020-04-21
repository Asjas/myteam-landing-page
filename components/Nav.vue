<template>
  <div class="flex items-center justify-between w-full max-w-screen-xl pt-10 mx-auto">
    <img class="ml-6 lg:ml-0 w-28" src="~/assets/svg/logo.svg" alt="myteam" />
    <div class="justify-between hidden w-full pl-20 text-white md:flex">
      <nav class="flex items-center">
        <ul class="flex justify-between w-32 font-semibold">
          <li>
            <a class="hover:text-lightcoral focus:text-lightcoral focus:outline-none focus:shadow-outline" href="#">home</a>
          </li>
          <li>
            <a class="hover:text-lightcoral focus:text-lightcoral focus:outline-none focus:shadow-outline" href="#">about</a>
          </li>
        </ul>
      </nav>
      <button class="px-6 py-2 mr-6 font-semibold border-2 border-white rounded-full lg:mr-0 focus:outline-none focus:shadow-outline">contact us</button>
    </div>
    <div class="md:hidden">
      <img class="mr-6 text-white outline-none cursor-pointer focus:shadow-outline focus:shadow-white" tabindex="0" src="~/assets/svg/hamburger.svg" alt="menu">
    </div>
  </div>
</template>
