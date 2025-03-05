import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function TechCloud() {
  return (
    <div className="relative flex max-w-lg items-center justify-center overflow-hidden rounded-lg px-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
