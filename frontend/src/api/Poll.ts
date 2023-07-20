import { ITodo } from "../shared/model/ITodo";
import { IPoll } from "./IPoll";
import { ShortPoll } from "./ShortPoll";

export class Poll implements IPoll {
  private strategy = new ShortPoll();

  onPoll<T>(onChange: (data: T) => void): void {
    throw new Error("Method not implemented.");
  }
}

class Request<T> {
  onPoll(onChange: (data: T) => void): void {}

  send(): Promise<T> {
    throw new Error();
  }
}

new Request<ITodo[]>().onPoll((data) => {
    
});
new Request<ITodo[]>().send();
