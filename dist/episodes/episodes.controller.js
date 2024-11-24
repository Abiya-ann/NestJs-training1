"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesController = void 0;
const common_1 = require("@nestjs/common");
const episodes_service_1 = require("./episodes.service");
let EpisodesController = class EpisodesController {
    constructor(episodeService) {
        this.episodeService = episodeService;
    }
    getAllEpisodes() {
        return 'all episodes';
    }
    findFeatured() {
        return this.episodeService.findFeatures();
    }
};
exports.EpisodesController = EpisodesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "getAllEpisodes", null);
__decorate([
    (0, common_1.Get)('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "findFeatured", null);
exports.EpisodesController = EpisodesController = __decorate([
    (0, common_1.Controller)('episodes'),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService])
], EpisodesController);
//# sourceMappingURL=episodes.controller.js.map