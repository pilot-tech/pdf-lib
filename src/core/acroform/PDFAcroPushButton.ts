import PDFDict from '../../core/objects/PDFDict';
import PDFAcroButton from '../../core/acroform/PDFAcroButton';
import PDFContext from '../../core/PDFContext';
import PDFRef from '../../core/objects/PDFRef';
import { AcroButtonFlags } from '../../core/acroform/flags';

class PDFAcroPushButton extends PDFAcroButton {
  static fromDict = (dict: PDFDict, ref: PDFRef) =>
    new PDFAcroPushButton(dict, ref);

  static create = (context: PDFContext) => {
    const dict = context.obj({
      FT: 'Btn',
      Ff: AcroButtonFlags.PushButton,
      Kids: [],
    });
    const ref = context.register(dict);
    return new PDFAcroPushButton(dict, ref);
  };
}

export default PDFAcroPushButton;
