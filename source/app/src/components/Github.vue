<template>
   <div v-if="loading"> Loading... </div>
   
   <div v-else>
      <div class="github-container">
         <img class="github-container__contributions" src="https://ghchart.rshah.org/243B55/tse018" alt="picture of my github profile number of contributions done day for day " />

         <div class="github-container__flex-wrapper">
            <h3 class="github-container__title">
               Total GitHub Contributions:
            </h3>
            
            <div v-for="content in result">
               <div v-for="contributions in content">
                  <p class="github-container__total-commits">
                     {{ contributions.totalContributions }}
                  </p>
               </div>
            </div>
         </div>   

         <div class="github-container__link-wrapper">
            <a href="https://github.com/tse018" target="_blank" class="github-container__link" aria-label="Go to my Github profile by clicking this link">
               Check out my Github!
            </a>
         </div>
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

      // Sending Graqphl query which I tried out in github graqphl playground
      // source coude: https://docs.github.com/en/graphql/overview/explorer
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

      // probably better way to do this!!
      // this REST-API have to layer which can be destructured
      const { data } = await response.json();
      const { user } = data;
      this.result = user;
   },
};
</script>

<style>
.github-container {
   width: 100%;
   display: flex;
   flex-direction: column;
}

.github-container__contributions {
   padding: 50px 20px 0 20px;
   width: 80%;
   margin: auto;
}

.github-container__flex-wrapper {
   display: flex;
   justify-content: end;
   margin-inline: 200px;
}

.github-container__title {
   font-size: var(--font-xxl);
}

.github-container__total-commits {
   padding: 2px;
   font-size: var(--font-xxl);
   font-style: italic;
   color: var(--font-color-highligth);
}

.github-container__link-wrapper {
   font-size: var(--font-xxl);
   margin-inline: 200px;
}

.github-container__link {
   border: var(--read-border-radius);
   margin: var(--read-margin);
   min-width: var(--read-width);
   transition: var(--read-transition);
   padding: var(--read-padding);
   color: var(--read-color);
}

.github-container__link:hover,
.github-container__link:focus {
   box-shadow: var(--read-hover-focus);
   color: var(--read-hover-focus-color);
}

@media screen and (max-width: 1200px) {
   .github-container__contributions {
      width: 100vw;
      padding: 50px 20px 0 20px;
   }

   .github-container__flex-wrapper {
      display: flex;
      width: 100%;
      margin-inline: 0;
      justify-content: start;
      padding-left: 50px;
   }

   .github-container__link-wrapper {
      margin-inline: 0;
      padding-top: 100px;
   }
}
</style>