class Category {
    id: string;
    parent: Category | null;
    name: string;

    constructor(id: string, parent: Category | null, name: string) {
        this.id = id;
        this.parent = parent;
        this.name = name;
      }
}