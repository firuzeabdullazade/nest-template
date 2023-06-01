import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectGridItem } from 'src/models/project';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProjects(): ProjectGridItem[] {
    console.log(`GET projects`);
    return this.projectService.getProjects();
  }

  @Get(':id')
  getProject(@Param('id') id: string): ProjectGridItem {
    console.log(`GET project with id ${id}`);
    return this.projectService.getProjectById(+id);
  }
}
