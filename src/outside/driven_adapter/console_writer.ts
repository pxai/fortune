import WriteFortunes from "../../boundary/driven_port/write_fortunes";

class ConsoleWriter implements WriteFortunes {
    public writeFortunes (fortune: string) {
        console.log(fortune);
    }
}

export default ConsoleWriter;