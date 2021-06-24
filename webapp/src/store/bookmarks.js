import { observable } from "../core/mobx";

const bookmarks = observable({
  list: JSON.parse(localStorage.getItem("bookmarks")) || [],
  get thisList() {
    return this.list;
  },
  hasItem(idx) {
    return this.list.some((item) => item.idx == idx);
  },
  newItem(item) {
    this.list = this.list.concat(item);
    localStorage.setItem("bookmarks", JSON.stringify(this.list));
  },
  deleteItem(idx) {
    this.list = this.list.filter((item) => item.idx != idx);
    localStorage.setItem("bookmarks", JSON.stringify(this.list));
  },
});

export default bookmarks;
