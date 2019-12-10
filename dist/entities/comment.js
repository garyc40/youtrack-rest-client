"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const issue_1 = require("./issue");
const attachments_1 = require("./attachments");
// TODO: add attachment and visibilty typings
class ReducedIssueCommentImpl {
    constructor() {
        this.issue = new issue_1.ReducedIssueImpl();
        this.created = 0;
        this.updated = 0;
        this.id = '';
        this.deleted = false;
        this.text = '';
    }
}
exports.ReducedIssueCommentImpl = ReducedIssueCommentImpl;
class IssueCommentImpl extends ReducedIssueCommentImpl {
    constructor() {
        super(...arguments);
        this.author = new user_1.ReducedUserImpl();
        this.attachments = new attachments_1.ReducedIssueAttachmentImpl();
        this.textPreview = '';
        this.usesMarkdown = false;
        this.visibility = null;
    }
}
exports.IssueCommentImpl = IssueCommentImpl;
