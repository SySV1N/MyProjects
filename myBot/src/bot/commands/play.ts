import { Context } from "grammy";
import { Command } from "./command.class";
import { PcService } from "../../services/pc";

export class PlayCommand extends Command {
    commandName = 'play';

    constructor(private _pcService: PcService) {
        super();
    }

    execute(ctx: Context): void {
        ctx.reply('Запускаю процесс на твоем ПК!');

        this._pcService.launchGame();
    }
}