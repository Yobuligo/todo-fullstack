// namespace Demo123 {
//   class DAO<T> {
//     findAll(): Promise<T[]> {
//       throw new Error();
//     }
//   }

//   interface IHavePath<T extends string>{
//     path: T
//   }

//   interface IPerson extends IHavePath<"/persons">{
//     firstname: string;
//     lastname: string;
//   }

//   class PersonDAODefault extends DAO<IPerson> {}
//   const PersonDAO = new PersonDAODefault();

//   class Request<T> {
//     constructor(private readonly request: () => Promise<T>) {}

//     onPoll(onChange: (data: T) => void, config?: any): void {}

//     send(): Promise<T> {
//       throw new Error();
//     }
//   }

//   const result = new Request(PersonDAO.findAll).send();

//   new Request(PersonDAO.findAll).onPoll((data) => {}, {
//     strategy: PollType.SHORT,
//     interval: 1000,
//   });
// }
