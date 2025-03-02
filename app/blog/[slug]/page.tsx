import { NextPage } from 'next';

interface PageParams {
  slug: string;
}

// Pour generateMetadata
export async function generateMetadata({ 
  params 
}: { 
  params: PageParams 
}) {
  return { title: `Post: ${params.slug}` };
}

// Pour la page elle-même
const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  return <h1>Slug: {params.slug}</h1>;
};

export default Page;