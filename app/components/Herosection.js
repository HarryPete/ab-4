import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";

const Herosection = () =>
{
    return (
        <div className="relative w-full items-center space-y-4 justify-center">
          <div className="flex flex-col gap-8 items-center">
            <Terminal>
              <TypingAnimation className='text-green-600 md:text-3xl text-xl font-semibold py-4'>&gt; Hi, I'm Abhishek</TypingAnimation>
              <AnimatedSpan delay={1500} className="text-white">
                <span>✔ 27 years young, thriving on creativity & code.</span>
              </AnimatedSpan>        

              <AnimatedSpan delay={2000} className="text-white">
                <span>✔ Currently working at Fints as a Full Stack Developer.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-white">
                <span>✔ Based in Bangalore with 3+ years of experience.</span>
              </AnimatedSpan>
 
              <AnimatedSpan delay={3000} className="text-white">
                <span>✔ Passionate about UI/UX and scalable architectures.</span>
              </AnimatedSpan>
      
              <AnimatedSpan delay={3500} className="text-white">
                <span>✔ Always learning, always evolving—tech is my playground!</span>
              </AnimatedSpan>
 
              <AnimatedSpan delay={4000} className="text-white">
                <span>✔ Let's make something amazing together!</span>
              </AnimatedSpan>
 
              <AnimatedSpan delay={4500} className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- portfolio/profile.js</span>
              </AnimatedSpan>
 
              <TypingAnimation delay={5000} className="text-muted-foreground">
                Success! Profile initialization completed.
              </TypingAnimation>
            </Terminal>
          </div>      
      </div>
    );
}

export default Herosection