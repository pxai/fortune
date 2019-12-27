import Model from "../architecture/model/model";
import CommandPort from "./driver_port/command_port";
import WriteFortunes from "./driven_port/write_fortunes";
import GetFortune from "./driven_port/get_fortune";
import DisplayFortune from "./handlers/display_fortune";


class Boundary implements CommandPort {
    private model: Model;
    private displayFortune: DisplayFortune;

	public Boundary(getFortune: GetFortune, writeFortunes: WriteFortunes) {
		this.model = this.buildModel(getFortune, writeFortunes);
	}

	private buildModel(getFortune: GetFortune, writeFortunes: WriteFortunes): Model {
		// Create the command handler(s)
		this.displayFortune = new DisplayFortune(getFortune, writeFortunes);

		// Inject command handler(s) into use case model, to tie them to command
		// types.
		const model: Model = new Model(); //b UseCaseModel.build(displayRandomPoem);
		return model;
	}

	public ask(commandObject: Object) {
		this.displayFortune.accept(commandObject);
	}
}

export default Boundary;