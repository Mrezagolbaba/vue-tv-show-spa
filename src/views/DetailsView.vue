<template>
  <div>
    <div class="pl-4 pr-4 pt-5 text-secondary">
      <infoView v-if="showDetails" :show-info="showDetails" />
      <seasonsView
        v-if="showSeasons.length > 0"
        :show-id="showId"
        :seasons="showSeasons"
      />
    </div>
  </div>
</template>
<script>
import { getShow } from "@/api";
import infoView from "@/components/card/InfoView";
import seasonsView from "@/components/card/seasonView";

export default {
  components: {
    infoView,
    seasonsView,
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
