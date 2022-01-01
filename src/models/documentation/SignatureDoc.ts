import { CallSignatureDeclaration, IndexSignatureDeclaration, ConstructSignatureDeclaration } from "ts-morph";
import EmitDocEvent from "../../decorators/EmitDocEvent";
import BaseDoc from "./BaseDoc";
import type TsDocGenContext from '../context';

type Signature = CallSignatureDeclaration | IndexSignatureDeclaration | ConstructSignatureDeclaration;

@EmitDocEvent('CREATE_SIGNATURE_DOC')
class SignatureDoc extends BaseDoc<"signature", Signature> {

    constructor(node: Signature, context: TsDocGenContext, sourceFileRelativePath: string) {
        super(node, "signature", context, sourceFileRelativePath);
    }

    public override toString() {
        return '';
    }
}

export default SignatureDoc;
