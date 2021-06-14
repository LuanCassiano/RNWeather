export default interface IAction<P = undefined> {
    type: string;
    payload?: P;
}
