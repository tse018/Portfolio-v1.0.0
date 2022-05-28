<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="github-container">
         <img
            class="github-container__contributions"
            src="https://ghchart.rshah.org/243B55/tse018"
            alt="picture of my github profile number of contributions done day for day "
         />

         <div class="github-container-wrapper">
            <h3 class="github-container__title">Total GitHub contributions:</h3>
            <div
               class="github-container__contribution-loop"
               v-for="content in result"
            >
               <div
                  class="github-container__contribution-number"
                  v-for="contributions in content"
               >
                  {{ contributions.totalContributions }}
               </div>
            </div>
         </div>

         <a
            href="https://github.com/tse018"
            target="_blank"
            class="section-introduction__github"
         >
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
      const token = import.meta.env.VITE_GITHUB_KEY
      const username = import.meta.env.VITE_GITHUB_USERNAME

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
@media screen and (max-width: 1200px) {
   .github-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }

   .github-container__contributions {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      padding: 20px 20px 0 20px;
   }

   .github-container-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
   }

   .github-container__title {
      font-size: var(--mobile-font-size-default);
      font-style: italic;
   }

   .github-container__contribution-number {
      font-style: italic;
      padding: 0 2px;
   }

   .section-introduction__github {
      width: 100%;
      margin: 20px auto;
      text-align: center;
      padding: 20px;
      max-width: max-content;
      border: 2px solid var(--font-color-highligth);
      color: var(--font-color-highligth);
      text-align: center;
      text-decoration: none;
      transition: 2s;
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 400px 0 0 var(--font-color-highligth);
      color: black;
   }
}

@media screen and (min-width: 1200px) {
   .github-container {
      margin-top: 2%;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }

   .github-container__title {
      display: flex;
      justify-content: end;
      font-size: 20px;
      width: 80%;
   }

   .github-container__contributions {
      width: 70%;
      margin: 0px auto 0 auto;
      height: auto;
   }

   .github-container-wrapper {
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
}
</style>
