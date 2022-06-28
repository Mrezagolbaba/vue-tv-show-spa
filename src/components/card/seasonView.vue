<template>
  <div>
    <div class="pt-4">
      <h3>Seasons</h3>
      <div class="row">
        <div
          class="col-md-2 col-6 mt-4"
          v-for="(season, index) in seasons"
          :key="index"
        >
          <router-link
            :to="{
              name: 'episodes',
              params: { id: showId, seasonNumber: season.number },
            }"
          >
            <ImageCard :show-image="season.image" />
            <div class="text-center">Season {{ season.number }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImageCard from "@/components/card/imageCard.vue";
export default {
  components: {
    ImageCard,
  },
  props: { seasons: { type: Array }, showId: { type: [Number, String] } },
};
</script>
