const cssDebug = [
  'background: black',
  'color: white',
  'border-radius: 4px',
  'padding: 6px',
  'padding-right: 10px',
 ].join(';');

 const cssError = [
  'background: red',
  'color: white',
  'border-radius: 4px',
  'padding: 6px',
  'padding-right: 10px',
 ].join(';');

class Debug {
  public error = (source: string, message: any): void => this.print(source, message, cssError);

  public log = (source: string, message: any): void => this.print(source, message, cssDebug);

  private print = (source: string, message: any, style: string): void => {
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line
      console.log(`%c ⚡️ ${source} ⚡️`, style);
      // tslint:disable-next-line
      console.log(message);
    }
  }
}

export default new Debug();
