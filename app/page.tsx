import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-[624px] flex-col pt-20 px-4">
      <div className="flex w-full justify-between items-center">
        <div className="size-[96px] rounded-xl bg-[url(/images/headshot.jpg)] bg-center bg-cover shadow"></div>
        <div>
          <h2 className="text-2xl text-black-500 dark:text-white font-bold md:text-[40px]">Kingsley Akwa</h2>
          <p className="text-sm text-darkGray leading-5 mt-1 dark:text-lightGray md:text-xl">Front-end Engineer</p>
        </div>
      </div>
      <AboutMeSection />
    </div>
  );
}
