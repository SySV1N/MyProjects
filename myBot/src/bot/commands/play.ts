import { Context } from "grammy";
import { Command } from "./command.class";
import { PcControlFacade } from "../../services/facades/pc.control";

export class PlayCommand extends Command {
    commandName = 'play';

    constructor(private _pcControl: PcControlFacade) {
        super();
    }

    execute(ctx: Context): void {
        ctx.reply('Запускаю процесс на твоем ПК!');

        this._pcControl.activateMathMode();
    }
}