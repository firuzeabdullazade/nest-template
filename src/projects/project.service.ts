import { Injectable } from '@nestjs/common';
import { ProjectGridItem } from 'src/models/project';

const projects: ProjectGridItem[] = [
  {
    projectId: 1,
    imageSrc: 'firstImage',
    head: 'Modern Kitchen',
    content: `<p> 
        Experience the pinnacle of culinary innovation with a modern kitchen that seamlessly blends style and functionality. Sleek, clean lines define the contemporary design, creating an inviting space for both cooking and entertaining. State-of-the-art appliances equipped with smart technology bring convenience to new heights, allowing you to control your kitchen with a simple touch or voice command.  
        </p> 
        <p> 
        Ample storage solutions, cleverly integrated into the design, ensure that every utensil and ingredient has its place, maximizing efficiency and minimizing clutter. With its cutting-edge aesthetics and advanced features, a modern kitchen elevates the heart of your home into a culinary haven where culinary creations come to life. 
        </p>`,
    projectImage: 'modernKitchen',
  },

  {
    projectId: 2,
    imageSrc: 'secondImage',
    head: 'Modern Sideboard',
    content: `<p> 
        Elevate your living space with a modern sideboard that exudes sophistication and functionality. The sleek and minimalist design of a contemporary sideboard adds a touch of elegance to any room, while its ample storage options make it a versatile piece for organizing and displaying your belongings. Crafted with high-quality materials, modern sideboards are built to withstand the test of time, offering both style and durability.  
        </p> 
        <p> 
        With integrated features like adjustable shelves and hidden compartments, these sideboards provide convenient solutions for storing and showcasing your favorite items. Whether used in the dining room, living room, or hallway, a modern sideboard is the perfect addition to create a stylish and organized environment in your home. 
        </p>`,
    projectImage: 'modernSideboard',
  },

  {
    projectId: 3,
    imageSrc: 'thirdImage',
    head: 'System Table',
    content: `<p> 
        Transform your workspace with a modern system table that seamlessly combines style and functionality. Designed with clean lines and a contemporary aesthetic, a system table adds a touch of sophistication to any office or study. Its versatile and modular design allows for customization, enabling you to configure the table to suit your specific needs. Equipped with integrated cable management systems and built-in storage compartments, the table ensures a clutter-free environment, promoting productivity and efficiency.  
        </p> 
        <p> 
        Crafted from high-quality materials, modern system tables are built to withstand daily use, offering both durability and elegance. Whether used for work, study, or creative pursuits, a modern system table elevates your workspace to new heights of sophistication and organization. 
        </p>`,
    projectImage: 'systemTable',
  },

  {
    projectId: 4,
    imageSrc: 'fourthImage',
    head: 'Minimal Livingroom',
    content: `<p> 
        Create a serene and inviting atmosphere in your home with a minimal living room that embraces simplicity and elegance. With a focus on clean lines and uncluttered spaces, a minimal living room exudes a sense of calm and tranquility. The color palette is typically kept neutral, with shades of white, gray, and earth tones, allowing the furniture and decor to take center stage.  
        </p> 
        <p> 
        Thoughtfully curated furniture pieces, characterized by their sleek and minimalist design, provide both comfort and style. Natural light is maximized, and accessories are kept to a minimum, allowing the beauty of the space to speak for itself. A minimal living room is the perfect sanctuary for relaxation, mindfulness, and the appreciation of understated beauty in your home. 
        </p>`,
    projectImage: 'minimalLivingroom',
  },
];

@Injectable()
export class ProjectService {
  getProjects(): ProjectGridItem[] {
    return projects;
  }

  getProjectById(id: number): ProjectGridItem {
    return projects.find((project) => project.projectId === id);
  }
}
