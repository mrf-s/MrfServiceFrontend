export class SequenceFormatter {
  constructor(public defaultSeparator: string = ', ') {
  }

  public render(sequence: string[], separator: string = this.defaultSeparator): string {
    return sequence.join(separator);
  }
}
