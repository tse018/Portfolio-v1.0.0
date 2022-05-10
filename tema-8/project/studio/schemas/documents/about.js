export default {
   title: "About",
   name: "about",
   type: "document",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
      },
      {
         title: "Slug",
         name: "slug",
         type: "slug",
         options: {
            source: "title",
         },
      },
      {
         title: "Introduction",
         name: "introduction",
         description:
            "Short introduction about yourself, 4-5 sentences is enough.",
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
         title: "Photo",
         name: "photo",
         type: "image",
         options: {
            hotspot: true, // option to edit picture size in sanity
         },
      },
   ],
};
