import Header from "@/components/layout/Header";
import MainTitle from "@/components/ui/MainTitle";
import SecondaryTitle from "./_component/secondaryTitle";

export default function profile() {
  return (
    <main>
      <Header />
      <div className="pl-15 pr-15 pt-10">
        <MainTitle content="Bienvenue" countOffre={0} />
        <SecondaryTitle content="Offres enregistrées" />
        <SecondaryTitle content="Historique des candidatures" />
      </div>
    </main>
  );
}
