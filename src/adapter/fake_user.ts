import CommandPort from "./command_port";

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