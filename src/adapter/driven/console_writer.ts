class ConsoleWriter implements WriteFortunes {
    public writeFortunes (fortunes: string[]) {
        fortunes.forEach(fortune => console.log(fortune));
    }
}