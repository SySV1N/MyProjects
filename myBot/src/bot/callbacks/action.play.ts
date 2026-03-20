import { Context } from "grammy";
import { Callback } from "./callback.class";
import { PcControlFacade } from "../../services/facades/pc.control";

export class PlayCallback extends Callback {
    callbackName = 'action_play';

    constructor(private _pcControl: PcControlFacade) {
        super();
    }

    async execute(ctx: Context): Promise<void> {
        await ctx.answerCallbackQuery({ text: 'Запускаю...' });
        await ctx.reply('Процесс запустился');

        this._pcControl.activateMathMode();
    }
}