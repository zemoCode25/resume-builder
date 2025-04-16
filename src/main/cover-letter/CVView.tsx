import { CVDataContext } from "@/contexts/CVDataContext";
import { useContext } from "react";
export function CVView() {
  const { CVData } = useContext(CVDataContext);
  const { personal, employer, company, letterBody } = CVData || {};
  return (
    <div className="w-1/2 px-5 sticky top-10 h-fit">
      <section className="font-serif bg-white p-12 flex flex-col gap-5">
        <article>
          <p>{`${employer?.firstName || ""} ${employer?.lastName || ""}`}</p>
          <p>{employer?.title || ""}</p>
          <p>{company?.companyName || ""}</p>
          <p>{company?.streetAddress || ""}</p>
          <p>{`${company?.city || ""}, ${company?.zipCode || ""}`}</p>
        </article>
        <article className="flex flex-col gap-5">
          <p>
            Dear {`${employer?.firstName || ""} ${employer?.lastName || ""}`}
          </p>
          <p>{letterBody?.openingBody || ""}</p>
          <p>{letterBody?.middleBody || ""}</p>
          <p>{letterBody?.closingBody || ""}</p>
          <p>Sincerely,</p>
          <p>{`${personal?.firstName || ""} ${personal?.lastName || ""}`}</p>
        </article>
      </section>
    </div>
  );
}
