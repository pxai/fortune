import Model from "../architecture/model/model";
import CommandPort from "./driver_port/command_port";
import WriteFortunes from "./driven_port/write_fortunes";
import GetFortune from "./driven_port/get_fortune";

class Boundary implements CommandPort {
	private model: Model;

	public Boundary(getFortune: GetFortune, writeFortunes: WriteFortunes) {
		this.model = this.buildModel(getFortune, writeFortunes);
	}

	private buildModel(getFortune: GetFortune, writeFortunes: WriteFortunes): Model {
		// Create the command handler(s)
		DisplayRandomPoem displayRandomPoem = new DisplayRandomPoem(getFortune, writeFortunes);

		// Inject command handler(s) into use case model, to tie them to command
		// types.
		const model: Model = UseCaseModel.build(displayRandomPoem);
		return model;
	}

	public ask(commandObject: Object) {
		new ModelRunner().run(this.model).reactTo(commandObject);
	}
}

export default Boundary;