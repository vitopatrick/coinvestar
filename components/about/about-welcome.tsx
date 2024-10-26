const AboutWelcome = () => {
  return (
    <section className="bg-bg text-white font-main">
      <div className="w-[90%] mx-auto">
        <div className="py-12">
          <div className="text-3xl md:text-5xl py-3 font-bold ">
            Welcome to Neo Exchanger
          </div>
          <div className="text-neutral-300 capitalize">
            At Neo Exchanger, we believe that everyone should have the freedom
            to earn, hold, spend, share and give their money - no matter who you
            are or where you come from.
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-3 my-8">
          <div>
            <img src="/grow.png" alt="info" />
          </div>
          <div className="self-center">
            <div className="text-xl md:text-3xl py-3 font-bold ">
              Grow with Neo Exchanger
            </div>
            <div className="text-neutral-300 capitalize">
              At Neo Exchanger, we give people the freedom to own their
              decisions, collaborate openly, and serve our users with passion
              and integrity. Join the Neo Exchanger team today and work with
              some of the world’s most talented, hardworking, and passionate
              people.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;
