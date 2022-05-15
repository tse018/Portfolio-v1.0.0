export default {
   title: "Projects",
   name: "project",
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
         validation: (Rule) =>
            Rule.required().error("Need to fill in this field for better SEO"),
      },
      {
         title: "Preview",
         name: "preview",
         type: "array",
         of: [{
            type: 'image'
         }],
         options: {
            hotspot: true, // option to edit picture size in sanity
         },
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
                     { title: "Strong",    value: "strong" },
                     { title: "Emphasis",  value: "em" },
                     { title: "Code",      value: "code" },
                     { title: "Highlight", value: "highlight" },
                  ],
               },
            },
         ],
      },
      {
         title: "Tech Stack",
         name: "techStack",
         type: "array",
         of: [{
            type: 'string'
         }]
      },
      {
         title: "Github",
         name: "github",
         type: "string",
      },
      {
         title: "Netlify",
         name: "netlify",
         type: "string",
      },
   ],
};
