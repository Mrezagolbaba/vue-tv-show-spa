<template>
  <div>
    <div class="pl-4 pr-4 pt-5 text-secondary">
      <InfoView v-if="showDetails" :show-info="showDetails" />
    </div>
  </div>
</template>
<script>
import { getShow } from "@/api";
import InfoView from "@/components/card/InfoView";

export default {
  components: {
    InfoView,
  },
  data() {
    return {
      showId: "",
      castData: [],
      crewData: [],
      showSeasons: [],
      showDetails: null,
    };
  },
  methods: {
    async fetchShowDetails() {
      this.showId = this.$route.params.id;
      this.showDetails = await getShow(this.showId);
      if (this.showDetails._embedded) {
        this.showSeasons = this.showDetails._embedded.seasons;
        this.castData = this.showDetails._embedded.cast.slice(0, 6);
        this.crewData = this.showDetails._embedded.crew.slice(0, 6);
      }
    },
  },
  created() {
    this.fetchShowDetails();
  },
};
</script>
