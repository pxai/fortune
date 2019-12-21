import WriteFortunes from "../../port/driven/write_fortunes";

class ConsoleWriter implements WriteFortunes {
    public writeFortunes (fortunes: string[]) {
        fortunes.forEach(fortune => console.log(fortune));
    }
}

export default ConsoleWriter;