import sanityClient from "@sanity/client";

export default sanityClient ({
   projectId: import.meta.env.VITE_SANITY_ID,
   dataset: "production",
   apiVersion: "2022-04-25",
   useCdn: true, 
});