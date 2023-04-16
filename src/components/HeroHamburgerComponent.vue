<template>
  <v-container fluid class="mt-0 pt-0">
    <v-row>
      <v-col></v-col>
      <v-col class="svg-wrapper d-flex justify-center hamburgerMaxHeight py-0">
        <v-img :src="require('@/assets/img/retroWaveHamburger.svg')" cover max-width="75%"></v-img>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import { getDatabaseData } from "@/services/notionHelpers";
export default {
  data() {
    return {
      notionData: [],
    };
  },
  async created() {
    const databaseId = process.env.VUE_APP_DB_ID;
    console.log('databaseId', databaseId);
    this.notionData = await getDatabaseData(databaseId);
  },
};
</script>
  
<style scoped>
.svg-wrapper {
  width: 100%;
  height: 100%;
}


</style>
  