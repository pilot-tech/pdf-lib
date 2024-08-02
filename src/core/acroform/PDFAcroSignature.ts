import PDFDict from '../../core/objects/PDFDict';
import PDFRef from '../../core/objects/PDFRef';
import PDFAcroTerminal from '../../core/acroform/PDFAcroTerminal';

class PDFAcroSignature extends PDFAcroTerminal {
  static fromDict = (dict: PDFDict, ref: PDFRef) =>
    new PDFAcroSignature(dict, ref);
}

export default PDFAcroSignature;
