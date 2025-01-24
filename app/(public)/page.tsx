import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-[624px] flex-col py-20 px-4 md:px-0">
      <div className="flex w-full justify-between items-center">
        <div className="size-[150px] rounded-xl bg-[url(/images/headshot.jpg)] bg-center bg-cover shadow md:size-[200px]"></div>
        <div>
          <h2 className="text-2xl text-black-500 dark:text-white font-bold md:text-[40px]">Kingsley Akwa</h2>
          <p className="text-sm font-medium leading-5 mt-1 md:text-xl">Front-end Engineer</p>
        </div>
      </div>
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
