import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episodes.entity';

@Injectable()
export class EpisodesService {
    private episodes: Episode[]=[
        {
            id:1,
            name: 'Ep1',
            featured: true,
        },
        {
            id:2,
            name:'Ep2',
            featured: false,
        },
    ];
    async findFeatures() {
        return this.episodes.filter((episode)=>episode.featured);
    }
}
