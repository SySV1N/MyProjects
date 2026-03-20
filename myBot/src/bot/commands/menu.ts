import { Context, InlineKeyboard } from "grammy";
import { Command } from "./command.class";

export class MenuCommand extends Command {
    commandName = 'menu';

    execute(ctx: Context): void {
        const keyboard = new InlineKeyboard()
            .text('Запустить калькулятор', 'action_play');

        ctx.reply('Пульт управления ПК:', { reply_markup: keyboard });
    }
}