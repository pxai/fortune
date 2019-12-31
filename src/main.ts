import Boundary from "./boundary/boundary";
import FortuneDatabase from "./outside/driven_adapter/fortune_database";
import ConsoleWriter from "./outside/driven_adapter/console_writer";
import FakeUser from "./outside/driver_adapter/fake_user";

class Main {
    private boundary: Boundary;
    constructor () {
      this.init();
    }

    private init() {
        // driven
        const fortuneDatabase: FortuneDatabase = new FortuneDatabase();
        const consoleWriter: ConsoleWriter = new ConsoleWriter();

        // Set driven adapters into boundary
        this.boundary = new Boundary(fortuneDatabase, consoleWriter);
    }

    public run () {
      new FakeUser(this.boundary).run();
    }
}

new Main().run();
