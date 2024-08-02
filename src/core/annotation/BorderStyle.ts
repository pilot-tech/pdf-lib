import PDFDict from '../../core/objects/PDFDict';
import PDFName from '../../core/objects/PDFName';
import PDFNumber from '../../core/objects/PDFNumber';

// TODO: Also handle the `/S` and `/D` entries
class BorderStyle {
  readonly dict: PDFDict;

  static fromDict = (dict: PDFDict): BorderStyle => new BorderStyle(dict);

  protected constructor(dict: PDFDict) {
    this.dict = dict;
  }

  W(): PDFNumber | undefined {
    const W = this.dict.lookup(PDFName.of('W'));
    if (W instanceof PDFNumber) return W;
    return undefined;
  }

  getWidth(): number | undefined {
    return this.W()?.asNumber() ?? 1;
  }

  setWidth(width: number) {
    const W = this.dict.context.obj(width);
    this.dict.set(PDFName.of('W'), W);
  }
}

export default BorderStyle;
