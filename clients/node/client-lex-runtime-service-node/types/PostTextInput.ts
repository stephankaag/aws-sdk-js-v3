import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PostTextInput shape
 */
export interface PostTextInput {
  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName: string;

  /**
   * <p>The alias of the Amazon Lex bot.</p>
   */
  botAlias: string;

  /**
   * <p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>
   */
  userId: string;

  /**
   * <p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>
   */
  sessionAttributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>
   */
  requestAttributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The text that the user entered (Amazon Lex interprets this text).</p>
   */
  inputText: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
