const Home = () => {
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/fetch-file", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        const { msg, data } = await res.json();
        console.log({ msg, data });
      }}
    >
      Log File
    </button>
  );
};

export default Home;
