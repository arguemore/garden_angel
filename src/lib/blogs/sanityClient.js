import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'a7fk82qa',
	dataset: 'production',
	apiVersion: '2023-01-05',
	useCdn: false // development
});

export default client;
