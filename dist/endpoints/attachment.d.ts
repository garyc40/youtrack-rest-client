import { BaseEndpoint } from "./base";
import { IssueAttachment } from "../entities/attachments";
import { PaginationOptions } from "../options/pagination_options";
export declare const AttachmentPaths: {
    attachments: string;
};
export declare class AttachmentEndpoint extends BaseEndpoint {
    all(issueId: string, paginationOptions?: PaginationOptions): Promise<IssueAttachment[]>;
    create(issueId: string, attachment: IssueAttachment): Promise<any>;
}
