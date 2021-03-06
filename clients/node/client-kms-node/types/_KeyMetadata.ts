/**
 * <p>Contains metadata about a customer master key (CMK).</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
 */
export interface _KeyMetadata {
  /**
   * <p>The twelve-digit account ID of the AWS account that owns the CMK.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The globally unique identifier for the CMK.</p>
   */
  KeyId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CMK. For examples, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">AWS Key Management Service (AWS KMS)</a> in the Example ARNs section of the <i>AWS General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time when the CMK was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>Specifies whether the CMK is enabled. When <code>KeyState</code> is <code>Enabled</code> this value is true, otherwise it is false.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The description of the CMK.</p>
   */
  Description?: string;

  /**
   * <p>The cryptographic operations for which you can use the CMK. The only valid value is <code>ENCRYPT_DECRYPT</code>, which means you can use the CMK to encrypt and decrypt data.</p>
   */
  KeyUsage?: "ENCRYPT_DECRYPT" | string;

  /**
   * <p>The state of the CMK.</p> <p>For more information about how key state affects the use of a CMK, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects the Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  KeyState?:
    | "Enabled"
    | "Disabled"
    | "PendingDeletion"
    | "PendingImport"
    | "Unavailable"
    | string;

  /**
   * <p>The date and time after which AWS KMS deletes the CMK. This value is present only when <code>KeyState</code> is <code>PendingDeletion</code>.</p>
   */
  DeletionDate?: Date | string | number;

  /**
   * <p>The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. This value is present only for CMKs whose <code>Origin</code> is <code>EXTERNAL</code> and whose <code>ExpirationModel</code> is <code>KEY_MATERIAL_EXPIRES</code>, otherwise this value is omitted.</p>
   */
  ValidTo?: Date | string | number;

  /**
   * <p>The source of the CMK's key material. When this value is <code>AWS_KMS</code>, AWS KMS created the key material. When this value is <code>EXTERNAL</code>, the key material was imported from your existing key management infrastructure or the CMK lacks key material. When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the AWS CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: "AWS_KMS" | "EXTERNAL" | "AWS_CLOUDHSM" | string;

  /**
   * <p>A unique identifier for the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that contains the CMK. This value is present only when the CMK is created in a custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>The cluster ID of the AWS CloudHSM cluster that contains the key material for the CMK. When you create a CMK in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, AWS KMS creates the key material for the CMK in the associated AWS CloudHSM cluster. This value is present only when the CMK is created in a custom key store.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>Specifies whether the CMK's key material expires. This value is present only when <code>Origin</code> is <code>EXTERNAL</code>, otherwise this value is omitted.</p>
   */
  ExpirationModel?:
    | "KEY_MATERIAL_EXPIRES"
    | "KEY_MATERIAL_DOES_NOT_EXPIRE"
    | string;

  /**
   * <p>The manager of the CMK. CMKs in your AWS account are either customer managed or AWS managed. For more information about the difference, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  KeyManager?: "AWS" | "CUSTOMER" | string;
}

export interface _UnmarshalledKeyMetadata extends _KeyMetadata {
  /**
   * <p>The date and time when the CMK was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time after which AWS KMS deletes the CMK. This value is present only when <code>KeyState</code> is <code>PendingDeletion</code>.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. This value is present only for CMKs whose <code>Origin</code> is <code>EXTERNAL</code> and whose <code>ExpirationModel</code> is <code>KEY_MATERIAL_EXPIRES</code>, otherwise this value is omitted.</p>
   */
  ValidTo?: Date;
}
