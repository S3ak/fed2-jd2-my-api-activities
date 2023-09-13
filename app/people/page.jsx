import PeopleList from "@/components/peopleList";

export default function People() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <h1 className="font-serif grow-0 text-7xl">People</h1>

      <section className="grow">
        <PeopleList />
      </section>
    </div>
  );
}
