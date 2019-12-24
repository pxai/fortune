import GetFortune from "../../boundary/driven_port/get_fortune";

class FortuneDatabase implements GetFortune {
    public getFortune(lang: string, fortuneType: string): string {
        const fortunes = {  
            "en" : {
                "classic": ["Early bird catches the worm", "Another String to your bow"],
                "jokes": ["Elvis has left the building", "hexagonal is the bee's knees"]
            },
            "es": {
                "classic": ["Early bird catches the worm", "Another String to your bow"],
                "jokes": ["Elvis has left the building", "hexagonal is the bee's knees"]         
            }
        };

        return fortunes[lang][fortuneType][0];
    }
}

export default FortuneDatabase;