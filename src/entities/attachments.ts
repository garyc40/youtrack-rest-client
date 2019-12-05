import { ReducedUserImpl, ReducedUser } from "./user";
import { ReducedIssue, ReducedIssueImpl } from "./issue";
import {ReducedIssueComment, ReducedIssueCommentImpl} from "./comment";

export class ReducedIssueAttachmentImpl {
    name?: string = '';
    created?: number = 0;
    updated?: number = 0;
    size?: number = 0;
    extension?: string = '';
    charset?: string = '';
    mimeType?: string = '';
    draft?: boolean = false;
    removed?: boolean = false;
    url?: string = '';
    thumbnailURL?: string = '';
}

export class IssueAttachmentImpl extends ReducedIssueAttachmentImpl {
    author?: ReducedUser = new ReducedUserImpl();
    metaData?: string = '';
    base64Content?: string = '';
    visibility?: any = null;
    issue?: ReducedIssue = new ReducedIssueImpl();
    comment?: ReducedIssueComment = new ReducedIssueCommentImpl();
}

export interface IssueAttachment extends IssueAttachmentImpl {
}

export interface ReducedIssueAttachment extends ReducedIssueAttachmentImpl {
}
