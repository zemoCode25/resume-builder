import { CV } from "../main/CV";
import { Resume } from "../main/Resume";
import { useState } from "react";

export function Main() {
  const [appType, setAppType] = useState("resume");

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-stone-100 py-10">
      {appType === "resume" ? <Resume /> : <CV />}
    </main>
  );
}
