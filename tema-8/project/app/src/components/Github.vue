<template>
   <img class="github__contributions" src="https://ghchart.rshah.org/243B55/tse018" alt="picture of my github profile number of contributions done day for day ">

   <a href="https://github.com/tse018" target="_blank" class="section-introduction__github">
      Check out my Github!
   </a>
</template>

<script>
export default {
   data() {
      return {
         key: import.meta.env.VITE_GITHUB_ID,
      };
   },
   async created() {
      async function getContributions(token, username) {
         const headers = {
            Authorization: `bearer ${username}`,
         };

         const query = {
            query: `query {
      user(login: "tse018") {
         name
         contributionsCollection(from: "2021-08-29T00:00:00.000+00:00") {
            contributionCalendar {
               colors
               totalContributions
               weeks {
                  contributionDays{
                  weekday,
                  date,
                  contributionCount,
                  color
               }
               firstDay
            }
            months {
               name
               year,
               firstDay,
               totalWeeks
                  }
               }
            }
         }
      }
   }`,
         };

         const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            body: JSON.stringify(query),
            headers: headers,
         });
         const data = await response.json();
         return data;
      }

      const data = await getContributions("token", "tse018");
      console.log(data);
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

.section-introduction__github {
   text-align: center;
   padding: 20px;
   margin: 0 autopx;
   min-height: 50px;
   border: 2px solid var(--font-color-highligth);
   color: var(--font-color-highligth);
   text-align: center;
   text-decoration: none;
   transition: 0.5s;
}

.section-introduction__github:hover,
.section-introduction__github:focus {
   box-shadow: inset 400px 0 0 var(--font-color-highligth);
   color: black;
}
</style>
