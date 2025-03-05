import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
 
export function HeroContent() 
{
  return(
    <div className="w-full flex flex-col gap-2 text-center">
     
      <BoxReveal boxColor={"rgba(0,0,0,0"} duration={0.5} >
        <h1 className="text-[3rem] font-bold mb-4">Hi, I'm Abhishek</h1>
        <p className="text-lg sm:text-md font-semibold">
          Full Stack JavaScript Developer Crafting Scalable Web Apps & Captivating User Experiences
        </p>
      </BoxReveal>
    </div>
  );
}