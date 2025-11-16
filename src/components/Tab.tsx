import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const data = {
  projects: [
    { img:'/background.png', title: "Zenify", desc: "Description for project 1", link: "#" },
    { img: '/background.png', title: "Project 2", desc: "Description for project 2", link: "#" },
    { img: '/background.png', title: "Project 3", desc: "Description for project 3", link: "#" },
    { img:'/background.png', title: "Zenify", desc: "Description for project 1", link: "#" },
    { img: '/background.png', title: "Project 2", desc: "Description for project 2", link: "#" },
    { img: '/background.png', title: "Project 3", desc: "Description for project 3", link: "#" },
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
    <div className="bg-muted/1 rounded-md p-4 flex flex-col gap-3">
      <div className="h-46 bg-muted rounded-md flex items-center justify-center overflow-hidden">
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>

      <h3 className="text-md font-semibold">{title}</h3>

      <p className="text-[12px] text-muted-foreground">{desc}</p>

      <a href={link} className="text-white text-[12px] hover:underline mt-auto">
        View More
      </a>
    </div>
  );
}