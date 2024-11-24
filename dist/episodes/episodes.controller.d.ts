import { EpisodesService } from './episodes.service';
export declare class EpisodesController {
    private episodeService;
    constructor(episodeService: EpisodesService);
    getAllEpisodes(): string;
    findFeatured(): Promise<import("./entity/episodes.entity").Episode[]>;
}
