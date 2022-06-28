<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 class="text-light mt-2">Trend Show</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="my-2 my-lg-0 collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item pl-lg-4">
            <router-link :to="{ name: 'home' }">
              <a class="nav-link" href="#">Dashboard</a>
            </router-link>
          </li>
        </ul>
        <searchInput />
      </div>
    </nav>
  </div>
</template>
<script>
import searchInput from "@/components/searchInput/searchInput.vue";
export default {
  components: {
    searchInput,
  },
};
</script>
