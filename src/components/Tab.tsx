import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink } from 'lucide-react';

interface CardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const data = {
  projects: [
    { img:'/scifi.png', 
      title: "Sci-Fi Corridor - Unity 3D", 
      desc: "A sleek sci-fi corridor illuminated by vibrant blue and orange glows, with a rusted robot serving as the hero asset", 
      link: "https://youtu.be/REeA5_Vu9aw" },

    { img: '/ferrucis.png', 
      title: "Meet the Ferrucis - Unity Games", 
      desc: "You are Detective Callahan, hired by a wealthy family after their matriarch is found dead outside their mansion. With no witnesses and rising panic, you must uncover the killer.", 
      link: "https://youtu.be/tlwb6ifXRoU" },

    { img: '/winter.png', 
      title: "Winter Island - Unity 3D", 
      desc: "A serene snowy island featuring snow-covered trees, warm lined lights, a passing train, and a stunning waterfall cascading into the sea", 
      link: "https://youtu.be/VD9aF5ZYUSQ" },

    { img:'/zenify.png', 
      title: "Zenify - Mobile App", 
      desc: "Zenify is a wellness app that helps users understand stress and anxiety while building healthy coping habits. Designed for a post-pandemic world, it offers tools to support mental and physical balance.", 
      link: "https://www.figma.com/proto/DsAGFgl3DiNBrP7IYoYfYo/DUX_Asg1_S10255495_HooYingQiPraise?node-id=0-1&t=pzL70HPZjF0W6rrH-1" },

    { img: '/phone.png',
      title: "Meet the Ferrucis - Mobile App", 
      desc: "A mobile companion app where players purchase skins, access exclusive updates, and review all clues collected in the game. It includes a custom case editor that helps players piece together evidence and solve the murder.", 
      link: "https://www.figma.com/proto/OcYUMlzWoys3i7YKxIEOY0/Smart-Phone---High-Fidelity?node-id=1-1233&t=wlZxwr2j40KJO3qZ-1" },
  ],

  achievements: [
    { img: "#", title: "Achievement 1", desc: "Description for achievement 1", link: "#" },
    { img: "#", title: "Achievement 2", desc: "Description for achievement 2", link: "#" },
    { img: "#", title: "Achievement 3", desc: "Description for achievement 3", link: "#" },
  ],
  skills: [
    { img: "#", title: "Skill 1", desc: "Description for skill 1", link: "#" },
    { img: "#", title: "Skill 2", desc: "Description for skill 2", link: "#" },
    { img: "#", title: "Skill 3", desc: "Description for skill 3", link: "#" },
  ],
};

export default function CustomTabs() {
  return (
    <Tabs defaultValue="projects" className="w-full max-w-[1350px] mx-auto mt-8 mb-10">
      <TabsList className="mx-auto">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Achievements</TabsTrigger>
        <TabsTrigger value="achievements">Skill Stack</TabsTrigger>
      </TabsList>

      {/* Projects */}
      <TabsContent value="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {data.projects.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </TabsContent>

      {/* Achievements */}
      <TabsContent value="achievements">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {data.skills.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </TabsContent>

      {/* Skill Stack */}
      <TabsContent value="skills">
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
    <div className="bg-muted/5 rounded-md p-4 flex flex-col">
        <div className="h-58 bg-muted rounded-md flex items-center justify-center overflow-hidden">
            <img src={img} alt={title} className="object-cover w-full h-full" />
        </div>

        <h3 className="text-md font-semibold pt-2">{title}</h3>
        <p className="text-[12px] text-muted-foreground pt-2">{desc}</p>

        <div className='flex flex-row items-center mt-auto pt-4'>
          <a href={link} className="text-white text-[12px] hover:underline pr-2">
              View More
          </a>
          <ExternalLink
          size={16}
          strokeWidth={1.5}
          />
        </div>
    </div>
  );
}