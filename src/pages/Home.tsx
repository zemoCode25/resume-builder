import { NavButton } from "../components/navigation/NavButton";

export function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-stone-100 py-10">
      <section className="bg-white min-h-screen p-10 w-[50dvw] font-serif py-3 shadow-all-md">
        <div className="flex justify-between items-center border-b py-2">
          <h1 className="font-bold text-3xl">Resume Builder</h1>
          <NavButton to={"/templates"} activeClassName="font-sans">
            Be job ready for free
          </NavButton>
        </div>
        <div>
          <p>555 - 555 - 555</p>
          <p>resume-builder.com</p>
        </div>
        <div className="flex flex-col py-1 my-1">
          <h1 className="font-semibold text-xl border-b">About the app</h1>
          <p>
            Land your dream job with an AI-powered resume builder that helps you
            craft the perfect resume in minutes. Our smart templates and
            real-time AI suggestions ensure your resume stands out to employers
            and passes ATS screenings. Customize effortlessly, optimize for
            success, and get expert recommendations tailored to your industry.
            Start building your professional resume for free today
          </p>
        </div>
        <div className="flex flex-col py-1 my-1">
          <h1 className="font-semibold text-xl border-b">Features</h1>
          <ol className="flex gap-10 pl-5 list-disc">
            <div>
              <li>AI-Assisted Resume Writing</li>
              <li>Customizable Templates & Themes</li>
              <li>Real-Time AI Chatbot Assistance</li>
            </div>
            <div>
              <li>Skill & Job Matching Suggestions</li>
              <li>ATS-Friendly Optimization</li>
              <li>One-Click Export & Sharing</li>
            </div>
          </ol>
        </div>
        <div className="flex flex-col py-1 my-1">
          <h1 className="font-semibold text-xl border-b">Testimonials</h1>
          <div className="flex justify-between italic">
            <p>Indeed</p>
            <p>March 2025 - Current</p>
          </div>
          <p className="mb-2">
            "At Indeed, we know how important it is for job seekers to have a
            polished, professional resume. This AI-powered resume builder takes
            the guesswork out of the process by providing industry-specific
            suggestions and ATS-friendly formatting, helping applicants get
            noticed faster by recruiters."
          </p>
          <div className="flex justify-between italic">
            <p>LinkedIn Jobs</p>
            <p>March 2025 - Current</p>
          </div>
          <p className="mb-2">
            "A well-structured resume is the key to making a strong first
            impression, and this AI-driven tool makes it easier than ever. With
            real-time suggestions, customizable templates, and job-specific
            optimizations, job seekers can create resumes that stand out in
            today’s competitive job market."
          </p>
          <div className="flex justify-between italic">
            <p>Glassdoor</p>
            <p>March 2025 - Current</p>
          </div>
          <p className="mb-2">
            "Your resume is your ticket to landing interviews, and this
            AI-powered resume builder ensures it’s optimized for success. With
            intelligent keyword recommendations and formatting that meets
            recruiter expectations, job seekers can increase their chances of
            securing their next big opportunity."
          </p>
        </div>
        <div className="flex flex-col py-1 my-1">
          <h1 className="font-semibold text-xl border-b">FAQS</h1>
          <strong className="py-1">
            How does the AI-powered resume builder work?
          </strong>
          <p>
            Our AI-powered resume builder helps you craft a professional resume
            by analyzing your input and providing industry-specific suggestions.
            It ensures proper formatting, highlights key skills, and optimizes
            your resume for Applicant Tracking Systems (ATS) to increase your
            chances of getting noticed by recruiters.
          </p>
          <strong className="py-1">Can I customize my resume template?</strong>
          <p>
            Our AI-powered resume builder helps you craft a professional resume
            by analyzing your input and providing industry-specific suggestions.
            It ensures proper formatting, highlights key skills, and optimizes
            your resume for Applicant Tracking Systems (ATS) to increase your
            chances of getting noticed by recruiters.
          </p>
          <strong className="py-1">Is my data safe and secure?</strong>
          <p>
            Absolutely. We prioritize your privacy and security, ensuring that
            your personal information is encrypted and never shared with third
            parties. You have full control over your data, and you can delete or
            download your resume at any time.
          </p>
        </div>
        <footer className="">
          <p>All rights reserved.</p>
          <p>
            Developed by <a href="">Zemo</a>
          </p>
        </footer>
      </section>
    </main>
  );
}
