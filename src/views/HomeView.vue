<template>
  <div>
    <trendMovie v-if="trendMovie.length > 0" :trendMovie="trendMovie" />
    <categoryMovie
      v-if="showsByGenres.length > 0"
      :genresData="showsByGenres"
    />
  </div>
</template>
<script>
import { getShows } from "@/api";
import categoryMovie from "@/components/category/categoryMovie";
import trendMovie from "@/components/category/trendMovie";

export default {
  components: {
    categoryMovie,
    trendMovie,
  },
  data() {
    return {
      trendMovie: [],
      showsByGenres: [],
    };
  },
  methods: {
    // Get top rating shows
    getTrendMovie(allShows) {
      const topRating = 9;
      const trendMovie = allShows.filter(
        (show) => show.rating.average >= topRating
      );
      trendMovie.sort((a, b) => b.rating.average - a.rating.average);
      return trendMovie;
    },

    // Get all unique genres from all shows
    getUniqueGenres(allShows) {
      return [...new Set(allShows.map((show) => show.genres).flat())].sort();
    },

    // Get shows per each genre and sort them according to rating
    getShowsByGenres(allShows) {
      const uniqueGeners = this.getUniqueGenres(allShows);
      const showsByGenres = uniqueGeners.map((genre) => {
        const shows = allShows
          .filter((show) => show.genres.includes(genre))
          .sort((a, b) => b.rating.average - a.rating.average);
        return { genre, shows };
      });
      return showsByGenres;
    },
  },

  async created() {
    const allShows = await getShows();
    console.log(allShows);
    this.popularShows = await this.getTrendMovie(allShows);
    this.showsByGenres = await this.getShowsByGenres(allShows);
  },
};
</script>
