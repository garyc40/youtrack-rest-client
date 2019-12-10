import { ReducedUser } from "./user";
import { ReducedIssue } from "./issue";
import { ReducedIssueComment } from "./comment";
export declare class ReducedIssueAttachmentImpl {
    name?: string;
    created?: number;
    updated?: number;
    size?: number;
    extension?: string;
    charset?: string;
    mimeType?: string;
    draft?: boolean;
    removed?: boolean;
    url?: string;
    thumbnailURL?: string;
}
export declare class IssueAttachmentImpl extends ReducedIssueAttachmentImpl {
    author?: ReducedUser;
    metaData?: string;
    base64Content?: string;
    visibility?: any;
    issue?: ReducedIssue;
    comment?: ReducedIssueComment;
}
export interface IssueAttachment extends IssueAttachmentImpl {
}
export interface ReducedIssueAttachment extends ReducedIssueAttachmentImpl {
}
