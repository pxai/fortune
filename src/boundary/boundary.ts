import Model from "../architecture/model/model";
import CommandPort from "./driver_port/command_port";
import WriteFortunes from "./driven_port/write_fortunes";
import GetFortune from "./driven_port/get_fortune";

class Boundary implements CommandPort {
	private model: Model;

	public Boundary(poemObtainer: GetFortune, lineWriter: WriteFortunes) {
		this.model = this.buildModel(poemObtainer, lineWriter);
	}

	private buildModel(poemObtainer: GetFortune, lineWriter: WriteFortunes): Model {
		// Create the command handler(s)
		DisplayRandomPoem displayRandomPoem = new DisplayRandomPoem(poemObtainer, lineWriter);

		// Inject command handler(s) into use case model, to tie them to command
		// types.
		const model: Model = UseCaseModel.build(displayRandomPoem);
		return model;
	}

	@Override
	public ask(commandObject: Object) {
		new ModelRunner().run(this.model).reactTo(commandObject);
	}
}

export default Boundary;