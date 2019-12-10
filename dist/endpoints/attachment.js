"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const attachments_1 = require("../entities/attachments");
exports.AttachmentPaths = {
    attachments: '/issues/{issueId}/attachments'
};
class AttachmentEndpoint extends base_1.BaseEndpoint {
    all(issueId, paginationOptions = {}) {
        return this.getResourceWithFields(this.format(exports.AttachmentPaths.attachments, { issueId }), attachments_1.IssueAttachmentImpl, { qs: paginationOptions });
    }
    create(issueId, attachment) {
        return this.postResourceWithFields(this.format(exports.AttachmentPaths.attachments, { issueId }), attachments_1.IssueAttachmentImpl, {
            body: attachment
        });
    }
}
exports.AttachmentEndpoint = AttachmentEndpoint;
