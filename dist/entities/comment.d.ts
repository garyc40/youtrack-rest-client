import { ReducedUser } from "./user";
import { ReducedIssue } from "./issue";
import { ReducedIssueAttachment } from "./attachments";
export declare class ReducedIssueCommentImpl {
    issue?: ReducedIssue;
    created?: number;
    updated?: number;
    id?: string;
    deleted?: boolean;
    text?: string;
}
export declare class IssueCommentImpl extends ReducedIssueCommentImpl {
    author?: ReducedUser;
    attachments?: ReducedIssueAttachment;
    textPreview?: string;
    usesMarkdown?: boolean;
    visibility?: any;
}
export interface IssueComment extends IssueCommentImpl {
}
export interface ReducedIssueComment extends ReducedIssueCommentImpl {
}
export interface UpdateIssueComment extends IssueComment {
    id: string;
}
