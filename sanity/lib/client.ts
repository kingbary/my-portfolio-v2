import { createClient } from "next-sanity";

import { QueryParams } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2023-03-01';

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const { result } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { filterResponse: false }
  );
  return {
    data: result,
  };
}
