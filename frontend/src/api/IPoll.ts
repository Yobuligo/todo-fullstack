export interface IPoll {
  onPoll<T>(onChange: (data: T) => void): void;
}
