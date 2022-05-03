export default {
   title: 'About',
   name: 'about',
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
         options: {
            source: 'title',
         },
      },
      {
         title: 'Introduction',
         name: 'introduction',
         description: 'Short introduction about yourself, 4-5 sentences is enough.',
         type: 'text'
      },
      {
         title: 'Professional',
         name: 'professional',
         type: 'text',
      },
      {
         title: 'Education',
         name: 'education',
         type: 'text',
      },
      {
         title: 'Hobby',
         name: 'hobby',
         type: 'text',
      },
      {
         title: 'Conclusion',
         name: 'conclusion',
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
            title: 'Photo',
            name: 'photo',
            type: 'image',
            options: {
               hotspot: true // option to edit picture size in sanity 
         },
      }
   ]
}