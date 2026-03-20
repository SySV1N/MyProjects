import { Context } from "grammy";
import { Command } from "./command.class";

export class StartCommand extends Command {
    commandName = 'start';

    execute(ctx: Context): void {
        ctx.reply('Привет! Я твой ПК-ассистент. Нажми /play, чтобы запустить приложение.');
    }
}