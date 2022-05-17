<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <img class="github__contributions" src="https://ghchart.rshah.org/243B55/tse018" alt="picture of my github profile number of contributions done day for day " />
      <h3>
         Total Contributions:
      </h3>

      <div v-for="content in result">
         <div v-for="contributions in content">
            {{ contributions.totalContributions }}
         </div>
      </div>

      <a href="https://github.com/tse018" target="_blank" class="section-introduction__github">
            Check out my Github!
      </a>
   </div>
</template>

<script>
export default {
   data() {
      return {
         result: null,
         loading: null,
      };
   },

   async created() {
      const token = import.meta.env.VITE_GITHUB_KEY;
      const username = import.meta.env.VITE_GITHUB_USERNAME;

      const headers = {
         Authorization: `bearer ${token}`,
      };

      const url = "https://api.github.com/graphql";
      const body = {
         query: `query {
            user(login: "${username}") {
               name
               contributionsCollection(from: "2021-08-29T00:00:00.000+00:00") {
                  contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                     contributionDays {
                        weekday
                        date
                        contributionCount
                        color
                     }
                     firstDay
                  }
                  months {
                     name
                     year
                     firstDay
                     totalWeeks
                  }
               }
            }
         }
      }`,
      };

      const response = await fetch(url, {
         method: "POST",
         body: JSON.stringify(body),
         headers: headers,
      });
      const { data } = await response.json();
      const { user } = data;
      this.result = user;
   },
};
</script>

<style>
.github__contributions {
   margin: 0 auto;
   position: relative;
   display: flex;
   width: 60%;
   height: 20%;
}
</style>
