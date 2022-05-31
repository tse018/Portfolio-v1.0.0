<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="github-container">
         <img class="github-container__contributions" src="https://ghchart.rshah.org/243B55/tse018" alt="picture of my github profile number of contributions done day for day " />

         <div class="github-container__wrapper">
            <h3 class="github-container__title">
               Total GitHub contributions:
            </h3>
            
            <div v-for="content in result">
               <div v-for="contributions in content">
                  {{ contributions.totalContributions }}
               </div>
            </div>
         </div>

         <a href="https://github.com/tse018" target="_blank" class="section-introduction__github">
            Check out my Github!
         </a>
      </div>
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
               contributionsCollection {
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
@media screen and (max-width: 600px) {
   
}

.github-container {
   margin-top: 2%;
   position: relative;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
}

.github-container__contributions {
   width: 70%;
   margin: 0px auto 0 auto;
   height: auto;
}

.github-container__wrapper {
   display: flex;
   flex-direction: row;
   padding: 0 20px;
   margin-left: 50px;
   font-size: 20px;
}

.github-container__contribution-number {
   width: 100%;
   font-style: italic;
   margin-left: 5px;
}

.section-introduction__github {
   margin: 0 18%;
   text-align: center;
   padding: 20px;
   min-height: 50px;
   max-width: max-content;
   border: 2px solid var(--font-color-highligth);
   color: var(--font-color-highligth);
   text-align: center;
   text-decoration: none;
   transition: 2s;
   margin-top: -50px;
}

.section-introduction__github:hover,
.section-introduction__github:focus {
   box-shadow: inset 400px 0 0 var(--font-color-highligth);
   color: black;
}
</style>
