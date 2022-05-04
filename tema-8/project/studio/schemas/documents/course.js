export default {
   title: "Course",
   name: "course",
   type: "document",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
      },
      {
         title: "Description",
         name: "description",
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
   ],
};
