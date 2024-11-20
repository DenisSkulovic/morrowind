import { Repository } from "typeorm";
import { Tag } from "../../../entities/Content/Tag";
import { DataSourceEnum } from "../../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../RepositoryServiceBase";
import { TaggableContentBase } from "../../../TaggableContentBase";



export class TagService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getTagRepo(source: DataSourceEnum): Repository<Tag> {
        return this.getRepository("Tag", source) as Repository<Tag>
    }

    public async getTag(tagName: string, source: DataSourceEnum): Promise<Tag | null> {
        return await this._getTagRepo(source).findOne({ where: { name: tagName } });
    }

    public async createTag(tagName: string, source: DataSourceEnum) {
        const tag = this._getTagRepo(source).create({ name: tagName });
        return await this._getTagRepo(source).save(tag);
    }

    public async saveTag(tag: Tag, source: DataSourceEnum) {
        return await this._getTagRepo(source).save(tag);
    }

    public async getOrCreateTag(tagName: string, source: DataSourceEnum) {
        let tag: Tag | null = await this.getTag(tagName, source);
        if (!tag) {
            tag = await this.createTag(tagName, source);
            await this.saveTag(tag, source);
        }
        return tag
    }

    public async addTagToEntity(entity: TaggableContentBase, tagName: string, source: DataSourceEnum): Promise<void> {
        const tag: Tag = await this.getOrCreateTag(tagName, source)
        entity.addTag(tag);
    }

    public async removeTagFromEntity(entity: TaggableContentBase, tagName: string, source: DataSourceEnum): Promise<void> {
        const tag = await this.getTag(tagName, source);
        if (tag) {
            entity.removeTag(tag);
        }
    }

    async entityHasTag(entity: TaggableContentBase, tagName: string, source: DataSourceEnum): Promise<boolean> {
        const tag = await this.getTag(tagName, source);
        return tag ? entity.hasTag(tag) : false;
    }
}