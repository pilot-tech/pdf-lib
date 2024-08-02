import PDFDict from '../../core/objects/PDFDict';
import PDFAcroChoice from '../../core/acroform/PDFAcroChoice';
import PDFContext from '../../core/PDFContext';
import PDFRef from '../../core/objects/PDFRef';
import { AcroChoiceFlags } from '../../core/acroform/flags';

class PDFAcroComboBox extends PDFAcroChoice {
  static fromDict = (dict: PDFDict, ref: PDFRef) =>
    new PDFAcroComboBox(dict, ref);

  static create = (context: PDFContext) => {
    const dict = context.obj({
      FT: 'Ch',
      Ff: AcroChoiceFlags.Combo,
      Kids: [],
    });
    const ref = context.register(dict);
    return new PDFAcroComboBox(dict, ref);
  };
}

export default PDFAcroComboBox;
