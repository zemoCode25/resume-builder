import { Input } from "@/components/ui/input";
export function Skill() {
  return (
    <form action="" className="w-full flex gap-3 bg-white p-5 rounded-md">
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="" className="font-semibold text-gray-700">
          Skill
        </label>
        <Input placeholder="e.g. Time Management" />
      </div>
    </form>
  );
}
