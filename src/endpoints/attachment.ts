import { BaseEndpoint } from "./base";
import { IssueAttachment, IssueAttachmentImpl } from "../entities/attachments";
import { PaginationOptions } from "../options/pagination_options";

export const AttachmentPaths = {
    attachments: '/issues/{issueId}/attachments'
};

export class AttachmentEndpoint extends BaseEndpoint {

    public all(issueId: string, paginationOptions: PaginationOptions = {}): Promise<IssueAttachment[]> {
        return this.getResourceWithFields<IssueAttachment[]>(this.format(AttachmentPaths.attachments, { issueId }), IssueAttachmentImpl, { qs: paginationOptions });
    }

    public create(issueId: string, attachment: IssueAttachment): Promise<any> {
        return this.postResourceWithFields<IssueAttachment>(this.format(AttachmentPaths.attachments, { issueId }), IssueAttachmentImpl, {
            body: attachment
        });
    }
}
