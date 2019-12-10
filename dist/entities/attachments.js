"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const issue_1 = require("./issue");
const comment_1 = require("./comment");
class ReducedIssueAttachmentImpl {
    constructor() {
        this.name = '';
        this.created = 0;
        this.updated = 0;
        this.size = 0;
        this.extension = '';
        this.charset = '';
        this.mimeType = '';
        this.draft = false;
        this.removed = false;
        this.url = '';
        this.thumbnailURL = '';
    }
}
exports.ReducedIssueAttachmentImpl = ReducedIssueAttachmentImpl;
class IssueAttachmentImpl extends ReducedIssueAttachmentImpl {
    constructor() {
        super(...arguments);
        this.author = new user_1.ReducedUserImpl();
        this.metaData = '';
        this.base64Content = '';
        this.visibility = null;
        this.issue = new issue_1.ReducedIssueImpl();
        this.comment = new comment_1.ReducedIssueCommentImpl();
    }
}
exports.IssueAttachmentImpl = IssueAttachmentImpl;
