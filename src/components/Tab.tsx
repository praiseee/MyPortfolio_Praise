import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const data = {
  projects: [
    { img:'/scifi.png', title: "Sci-Fi Corridor - Unity 3D", desc: "Description for project 1", link: "#" },
    { img: '/ferrucis.png', title: "Meet the Ferrucis - Unity Games", desc: "You are Detective Callahan, famed for solving complex cases. Your latest assignment comes from a wealthy family in panic: their matriarch’s body was found outside their mansion, with no witnesses or unusual activity. The family desperately seeks your expertise to uncover the murderer within their circle.", link: "#" },
    { img: '/winter.png', title: "Winter Island - Unity 3D", desc: "Description for project 3", link: "#" },
    { img:'/zenify.png', title: "Zenify - Mobile App", desc: "Zenify is a wellness app designed to support mental and physical health by helping users understand stress and anxiety while cultivating healthy coping mechanisms. Building on the growing demand for wellbeing solutions since the COVID-19 pandemic, Zenify offers a range of features to help users achieve balance and maintain relevance in a post-pandemic world.", link: "#" },
    { img: '/phone.png', title: "Meet the Ferrucis - Mobile App", desc: "Description for project 2", link: "#" },
    { img: '/background.png', title: "Hubql (UI Engineer) - Web", desc: "Description for project 3", link: "#" },
  ],
  skills: [
    { img: "#", title: "Skill 1", desc: "Description for skill 1", link: "#" },
    { img: "#", title: "Skill 2", desc: "Description for skill 2", link: "#" },
    { img: "#", title: "Skill 3", desc: "Description for skill 3", link: "#" },
  ],
  achievements: [
    { img: "#", title: "Achievement 1", desc: "Description for achievement 1", link: "#" },
    { img: "#", title: "Achievement 2", desc: "Description for achievement 2", link: "#" },
    { img: "#", title: "Achievement 3", desc: "Description for achievement 3", link: "#" },
  ],
};

export default function CustomTabs() {
  return (
    <Tabs defaultValue="projects" className="w-full max-w-[1350px] mx-auto mt-8 mb-10">
      <TabsList className="mx-auto">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skill Stack</TabsTrigger>
        <TabsTrigger value="achievements">Achievements</TabsTrigger>
      </TabsList>

      {/* Projects */}
      <TabsContent value="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {data.projects.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </TabsContent>

      {/* Skill Stack */}
      <TabsContent value="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {data.skills.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </TabsContent>

      {/* Achievements */}
      <TabsContent value="achievements">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {data.achievements.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function Card({ img, title, desc, link }: CardProps) {
  return (
    <div className="bg-muted/1 rounded-md p-4 flex flex-col">
        <div className="h-58 bg-muted rounded-md flex items-center justify-center overflow-hidden">
            <img src={img} alt={title} className="object-cover w-full h-full" />
        </div>

        <h3 className="text-md font-semibold pt-2">{title}</h3>
    
        <p className="text-[12px] text-muted-foreground pt-2">{desc}</p>
        <a href={link} className="text-white text-[12px] hover:underline mt-auto pt-2">
            View More
        </a>
    </div>
  );
}