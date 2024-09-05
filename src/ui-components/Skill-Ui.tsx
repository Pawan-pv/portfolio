import { GlareCard } from "../ui/glare-card";
 type TEXT = {
    text: string
 }
export function GlareCardDemo({text}: TEXT) {
  return (
    <GlareCard className="flex flex-col items-center justify-center ">
      
      <p className="text-white font-bold text-xl mt-4">{text}</p>
    </GlareCard>
  );
}
