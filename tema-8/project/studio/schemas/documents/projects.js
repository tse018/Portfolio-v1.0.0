export default {
   title: 'Projects',
   name: 'project',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
      },
      {
         title: 'Slug',
         name: 'slug',
         type: 'slug',
         description: 'Click on generate button for default slug, or write in prefered slug',
         options: {
            source: 'title',
         },
         validation: Rule => Rule.required().error('Need to fill in this field for better SEO')
      },
      {
         title: 'Preview',
         name: 'preview',
         type: 'image',
         options: {
            hotspot: true // option to edit picture size in sanity 
         },
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
      },
      {
         title: 'Tech Stack',
         name: 'techStack',
         type: 'array',
         of: [{
            type: 'reference',
            to: [{ type: 'tech'}]
         }]
      },
      {
         title: 'Github',
         name: 'github',
         type: 'string',
      },
      {
         title: 'Netlify',
         name: 'netlify',
         type: 'string',
      },
   ]
}