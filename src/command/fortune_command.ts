class FortuneCommand {
    constructor (private _lang: string, private _fortuneType: string) {}

    get lang () {
        return this._lang;
    }

    get fortuneType () {
        return this._fortuneType;
    }
}