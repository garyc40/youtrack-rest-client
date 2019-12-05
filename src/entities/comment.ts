import { ReducedUserImpl, ReducedUser } from "./user";
import { ReducedIssue, ReducedIssueImpl } from "./issue";
import {ReducedIssueAttachment, ReducedIssueAttachmentImpl} from "./attachments";

// TODO: add attachment and visibilty typings
export class ReducedIssueCommentImpl {
    issue?: ReducedIssue = new ReducedIssueImpl();
    created?: number = 0;
    updated?: number = 0;
    id?: string = '';
    deleted?: boolean = false;
    text?: string = '';
}

export class IssueCommentImpl extends ReducedIssueCommentImpl {
    author?: ReducedUser = new ReducedUserImpl();
    attachments?: ReducedIssueAttachment = new ReducedIssueAttachmentImpl();
    textPreview?: string = '';
    usesMarkdown?: boolean = false;
    visibility?: any = null;
}

export interface IssueComment extends IssueCommentImpl {
}

export interface ReducedIssueComment extends ReducedIssueCommentImpl {
}

export interface UpdateIssueComment extends IssueComment {
    id: string;
}