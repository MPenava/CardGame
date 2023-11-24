import Card from "./Card";

function Overview() {
  return (
    <>
      <h1 className="text-4xl mb-8 text-white ml-3 mt-5">Controls</h1>
      <section className="w-auto lg-w-5/12 md:w-4/12 grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default Overview;
