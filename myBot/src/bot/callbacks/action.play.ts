import { Context } from "grammy";
import { Callback } from "./callback.class";
import { PcService } from "../../services/pc";

export class PlayCallback extends Callback {
    callbackName = 'action_play';

    constructor(private _pcService: PcService) {
        super();
    }

    async execute(ctx: Context): Promise<void> {
        await ctx.answerCallbackQuery({ text: 'Запускаю...' });
        await ctx.reply('Процесс запустился');

        this._pcService.launchGame();
    }
}