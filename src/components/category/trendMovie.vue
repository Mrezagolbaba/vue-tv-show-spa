<template>
  <div>
    <h3 class="pl-4 pt-4 text-secondary">Trends shows</h3>
    <carousel
      :loop="false"
      :height="400"
      :width="250"
      :display="10"
      :controls-visible="true"
    >
      <slide v-for="(show, index) in trendMovie" :key="index" :index="index">
        <figure>
          <router-link
            :to="{
              name: 'show-details',
              params: { id: show.id, showData: show },
            }"
          >
            <img :src="show.image.medium" />
          </router-link>
          <div class="show-content">
            <span>{{ show.name }}</span>
            <span class="float-right text-primary">
              {{ show.rating.average }}/{{ ratedBy }}
            </span>
          </div>
        </figure>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-snap";

export default {
  components: { Carousel, Slide },
  props: {
    trendMovie: { type: Array, required: true },
  },
  data: () => ({ ratedBy: 10 }),
};
</script>
<style scoped>
.vs-carousel__slide {
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
}
.vs-carousel__arrows--right {
  right: 2%;
  background-color: black;
  color: white;
  font-size: 25px;
}
.vs-carousel__arrows--left {
  left: 2%;
  background-color: black;
  color: white;
  font-size: 25px;
}
</style>
