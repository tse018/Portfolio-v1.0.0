const data = {
   "query": `query { 
      user(login: "${username}") {
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
   }`
}