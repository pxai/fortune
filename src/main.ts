import Boundary from "./boundary/boundary";
import FortuneDatabase "./outside/driven_adapter/fortune_database";
import ConsoleWriter "./outside/driven_adapter/console_writer";
import FakeUser "./driver_adapter/fake_user";

class Main {
    private boundary: Boundary;
    constructor () {
      init();
    }

    private init() {
        // driven
        fortuneDatabase: FortuneDatabase = new FortuneDatabase();
        consoleWriter: ConsoleWriter = new ConsoleWriter();

        // Set driven adapters into boundary
        this.boundary = new Boundary(fortuneDatabase, consoleWriter);
    }

    public run () {
      new FakeUser(this.boundary).run();
    }
}
