import { Author } from "@/sanity.types";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { fetchAuthor } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  let author: { data: Author[] } = { data: [] };
  try {
    author = await fetchAuthor();
  } catch (error) {
    console.error('error', error);
  }
  const authorName = author.data[0]?.name ?? null
  const authorRole = author.data[0]?.role ?? null
  const authorImage = author.data[0]?.image ? urlFor(author.data[0].image).url() : '/images/headshot.jpg';
  const webpUrl = author.data[0]?.image ? urlFor(author.data[0].image).format('webp').url() : '/images/headshot.webp';

  return (
    <div className="flex min-h-screen w-full max-w-[624px] flex-col py-20 px-4 md:px-0">
      <div className="flex w-full justify-between items-center">
        <picture>
          <source srcSet={webpUrl} type="image/webp" />
          <Image
            src={authorImage}
            alt={authorName || 'Author Headshot'}
            width={200}
            height={200}
            className="size-[150px] rounded-xl object-cover shadow md:size-[200px]"
          />
        </picture>
        <div>
          <h2 className="text-2xl text-black-500 dark:text-white font-bold md:text-[40px]">{authorName}</h2>
          <p className="text-sm font-medium leading-5 mt-1 md:text-xl">{authorRole}</p>
        </div>
      </div>
      <AboutMeSection author={author?.data[0]} />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
