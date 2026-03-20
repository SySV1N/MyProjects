import { PcService } from "../pc";

export class PcControlFacade {
    constructor(private _pcService: PcService) {}

    public activateGamerMode(gamePath: string) {
        console.log('Активация игрового режима');

        this._pcService.closeCalculator();
        this._pcService.launchGame(gamePath);

        console.log('Готово! Идем играть!');
    }

    public activateMathMode() {
        console.log('Активация режима математика');

        this._pcService.openCalculator();
    }
}