import CardService from "../molecules/card-service";

const OurService = () => {
  return (
    <article className="min-h-screen md:px-8 sm:px-6 px-4 lg:py-12 py-6 dark:bg-neutral-950 bg-white flex flex-col items-center ">
      <div className="px-2 py-1.5 rounded-full border dark:border-neutral-900 shadow-xs border-gray-100 text-xs">
        🪄 SERVICES
      </div>
      <div>
        <h2 className="lg:text-4xl text-xl flex flex-wrap text-center font-semibold dark:text-white mt-4">
          <span className="text-pink-500">Personalized</span> services tailored{" "}
          <span className="text-pink-500">just for you</span>.
        </h2>
      </div>
      <div className="lg:mt-20 mt-8 w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-8 gap-4">
        <CardService/>
      </div>
    </article>
  );
};
export default OurService;
