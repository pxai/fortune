import CommandPort from "../../port/driver/command_port";
import FortuneCommand from "../../command/fortune_command";

class FakeUser {
    private port: CommandPort;

    public FakeUser (port: CommandPort) {
        this.port = port;
    }

    public run() {
        this.port.ask(new FortuneCommand("en", "joke"));
        this.port.ask(new FortuneCommand("es", "classic"));
    }
}

export default FakeUser;