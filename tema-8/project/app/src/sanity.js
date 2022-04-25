import sanityClient from "@sanity/client";

export default sanityClient ({
   projectId: "54soe6eo",
   dataset: "production",
   apiVersion: "2022-04-22", // skriver dagens dato fra første opprettelse, slik at vi bruker den oppdaterte api versjonen fram til i dag, men ikke introduserer nyere api versjoner
   useCdn: false, // localhost eller jobber lokalt er det false
});