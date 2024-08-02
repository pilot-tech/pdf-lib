import PDFDict from '../../core/objects/PDFDict';
import PDFAcroChoice from '../../core/acroform/PDFAcroChoice';
import PDFContext from '../../core/PDFContext';
import PDFRef from '../../core/objects/PDFRef';

class PDFAcroListBox extends PDFAcroChoice {
  static fromDict = (dict: PDFDict, ref: PDFRef) =>
    new PDFAcroListBox(dict, ref);

  static create = (context: PDFContext) => {
    const dict = context.obj({
      FT: 'Ch',
      Kids: [],
    });
    const ref = context.register(dict);
    return new PDFAcroListBox(dict, ref);
  };
}

export default PDFAcroListBox;
