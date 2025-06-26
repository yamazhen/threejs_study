function Home() {
  return (
    <div className="flex flex-col -translate-y-8 text-right">
      <h1 className="text-5xl w-[600px] uppercase hover:translate-x-2 transition-transform duration-200">
        Welcome To My Three.js Playground
      </h1>
      <h2 className="text-xl text-foreground/80 uppercase">
        My name is{" "}
        <span className="inline-block hover:scale-150 transition-transform duration-200 bg-background text-zinc-500">
          bowen
        </span>
      </h2>
      <small className="text-foreground/80 w-64 text-left hover:translate-x-2 transition-transform duration-200">
        The numbers in the navigation menu above represent the number of
        three.js experiments I have created so far. You can click on them to
        view
      </small>
    </div>
  );
}

export default Home;
