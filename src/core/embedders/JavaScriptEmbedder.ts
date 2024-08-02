import PDFHexString from '../../core/objects/PDFHexString';
import PDFContext from '../../core/PDFContext';
import PDFRef from '../../core/objects/PDFRef';

class JavaScriptEmbedder {
  static for(script: string, scriptName: string) {
    return new JavaScriptEmbedder(script, scriptName);
  }

  private readonly script: string;
  readonly scriptName: string;

  private constructor(script: string, scriptName: string) {
    this.script = script;
    this.scriptName = scriptName;
  }

  async embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef> {
    const jsActionDict = context.obj({
      Type: 'Action',
      S: 'JavaScript',
      JS: PDFHexString.fromText(this.script),
    });

    if (ref) {
      context.assign(ref, jsActionDict);
      return ref;
    } else {
      return context.register(jsActionDict);
    }
  }
}

export default JavaScriptEmbedder;
