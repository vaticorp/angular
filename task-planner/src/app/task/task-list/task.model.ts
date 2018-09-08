export class Task {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public dateStart: string,
    public dateEnd: string,
    public status: string
  ) {}
}
