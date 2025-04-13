import { CV } from "../main/CV";
import { Resume } from "../main/Resume";
import { AppTypeProvider } from "@/contexts/AppContextProvider";

export function Main() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-stone-100 py-10">
      <AppTypeProvider>
        <Resume />
        <CV />
      </AppTypeProvider>
    </main>
  );
}
