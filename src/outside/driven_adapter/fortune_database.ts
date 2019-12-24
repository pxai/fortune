import GetFortune from "../../boundary/driven_port/get_fortune";

class FortuneDatabase implements GetFortune {
    getFortune(lang: string, fortuneType: string): string {
        throw new Error("Method not implemented.");
    }
}

export default FortuneDatabase;