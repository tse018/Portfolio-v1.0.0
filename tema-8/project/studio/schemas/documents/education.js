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
         title: 'Courses',
         name: 'courses',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'course'}]
         }]
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