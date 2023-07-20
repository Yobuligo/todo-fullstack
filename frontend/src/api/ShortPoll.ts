import { IPoll } from "./IPoll";

export class ShortPoll implements IPoll {
    onPoll<T>(onChange: (data: T) => void): void {
        throw new Error("Method not implemented.");
    }

}
