<template>
  <v-container>
    <v-col cols="12" xs="12">
      <v-card color="blue" shaped outlined>
        <v-row justify="center">
          <v-card-title>Your finance App</v-card-title>
        </v-row>
      </v-card>
      <v-col cols="12" xs="2">
        <v-row justify="center">
          <template v-for="(item, index) in advantages">
              <HomeCard :key="index" :message='item.message' :title='item.title'> </HomeCard>
          </template>
        </v-row>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import HomeCard from "@/components/Home/Card";
export default {
  components: {
    HomeCard
  },
  data() {
    return {
      advantages: [
        { title: "Fast", message: "All your bank account changes in one view" },
        {
          title: "Secure",
          message: "Register and Login to your personal account"
        },
        { title: "Fast", message: "All your bank account changes in one view" },
        { title: "Fast", message: "All your bank account changes in one view" },
        { title: "Fast", message: "All your bank account changes in one view" },
        { title: "Fast", message: "All your bank account changes in one view" }
      ]
    };
  }
};
</script>