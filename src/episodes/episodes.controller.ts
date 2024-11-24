import { Controller, Get } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodeService:EpisodesService) {}
    @Get()
    getAllEpisodes() {
        return 'all episodes';
    }
    @Get('featured')
    findFeatured(){
        return this.episodeService.findFeatures();
    }
}
