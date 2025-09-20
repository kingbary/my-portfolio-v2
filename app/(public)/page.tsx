import { Author } from "@/sanity.types";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import { fetchAuthor } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingsley Akwa | Frontend Engineer",
  description:
    "Frontend Engineer specializing in building interactive web applications and data-driven dashboards",
  openGraph: {
    title: "Kingsley Akwa | Frontend Engineer",
    description:
      "Frontend Engineer specializing in building interactive web applications and data-driven dashboards",
    url: "https://kingsleyakwa.tech/",
    siteName: "Kingsley Akwa",
    images: [
      {
        url: "https://kingsleyakwa.tech/images/headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Cinnamon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Akwa | Frontend Engineer",
    description:
      "Kingsley Akwa builds global visibility for visionary brands and professionals through PR services, media placements, and strategic storytelling.",
    images: ["https://kingsleyakwa.tech/images/headshot.jpg"],
    site: "@kingsley_akwa",
  },
};

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
          <h1 className="text-2xl text-black-500 dark:text-white font-bold md:text-[40px]">{authorName}</h1>
          <p className="text-sm font-medium leading-5 mt-1 md:text-xl">{authorRole}</p>
        </div>
      </div>
      <AboutMeSection author={author?.data[0]} />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
