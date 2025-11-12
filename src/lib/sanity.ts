import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ugbg272j',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true, // Set to false if you want fresh data
});

export default sanityClient;
