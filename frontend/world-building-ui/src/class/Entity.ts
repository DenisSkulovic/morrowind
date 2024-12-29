import { LooseObject } from "../types";

export class Entity {

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }

}
