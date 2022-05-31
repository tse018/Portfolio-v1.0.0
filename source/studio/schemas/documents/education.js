export default {
   title: 'Education',
   name: 'education',
   type: 'document',
   fields: [
      {
         title: 'Institute',
         name: 'institute',
         type: 'string',
      },
      {
         title: 'Study program',
         name: 'studyProgram',
         type: 'string',
      },
      {
         title: "Description",
         name: "description",
         description:
            "description about this course",
         type: "array",
         of: [
            {
               type: "block",
               marks: {
                  decorators: [
                     { title: "Strong", value: "strong" },
                     { title: "Emphasis", value: "em" },
                     { title: "Code", value: "code" },
                     { title: "Highlight", value: "highlight" },
                  ],
               },
            },
         ],
      },
      {
         title: "Courses",
         name: "courses",
         type: "array",
         of: [{
            type: 'string'
         }],
      },
      {
         title: 'Start date',
         name: 'startDate',
         type: 'date',
         options: {
            dateFormat: 'DD-MMM-YYYY',
            calenderTodayLabel: 'Today'
         }
      },
      {
         title: 'End date',
         name: 'endDate',
         type: 'date',
         options: {
            dateFormat: 'DD-MMM-YYYY',
            calenderTodayLabel: 'Today'
         }
      },
   ]
}