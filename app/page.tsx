import CounterModule from "../app/components/CounterModule";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
  <div className="font-family: sans-serif">
      <h1>Page d'accueil</h1>
      <p>Module Counter :</p>
      <div>
        <CounterModule initialValue={5} />
      </div>
    </div>
)}
