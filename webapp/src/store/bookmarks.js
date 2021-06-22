import { observable } from "../core/mobx";

const bookmarks = observable({
  list: [],
  get thisList() {
    return this.list;
  },
  hasItem(idx) {
    return this.list.some((item) => item.idx == idx);
  },
  newItem(item) {
    this.list = this.list.concat(item);
  },
  deleteItem(idx) {
    this.list = this.list.filter((item) => item.idx != idx);
  },
});

export default bookmarks;
