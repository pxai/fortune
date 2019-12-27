import FortuneCommand from "../../command/fortune_command";
import WriteFortunes from "../driven_port/write_fortunes";
import GetFortune from "../driven_port/get_fortune";
import Command from "../../command/command";

class DisplayFortune implements Consumer<FortuneCommand> {
    constructor (private getFortune: GetFortune, private writeFortunes: WriteFortunes) {}

    public accept(fortuneCommand: FortuneCommand): void {
        const fortune: string = this.getFortune.getFortune(fortuneCommand.lang, fortuneCommand.fortuneType);
        this.writeFortunes.writeFortunes(fortune);   
    }
}

interface Consumer<T> {
    accept(command: Command): void;
}