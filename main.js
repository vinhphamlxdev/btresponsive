let sidebarMsgList = document.querySelector(".sidebar__option-msg--list");
const userArr = [
  {
    avatar: "./assets/av1.png",
    name: "Ina Perry",
    status: "Online",
  },
  {
    avatar: "./assets/av2.png",
    name: "Wesley Ray",
    status: "Online",
  },
  {
    avatar: "./assets/av3.png",
    name: "Eula Burton",
    status: "Work",
  },
  {
    avatar: "./assets/av4.png",
    name: "Viola Morales",
    status: "Offline",
  },
  {
    avatar: "./assets/av5.png",
    name: "Vincent Terry",
    status: "Online",
  },
  {
    avatar: "./assets/av6.png",
    name: "Nell Burns",
    status: "Offline",
  },
  {
    avatar: "./assets/av7.png",
    name: "Lydia Sutton",
    status: "Online",
  },
  {
    avatar: "./assets/av8.png",
    name: "Cynthia Evans",
    status: "Offline",
  },
];
function renderUserItem(item) {
  return `
    <div class="list-item user__item">
    <div class="item-left">
      <img src="${item.avatar}" alt="" class="icon">
      <span>${item.name}</span>
    </div>
    <div class="item-right">
      <span class="user-status ${
        item.status === "Work"
          ? "status-work"
          : item.status === "Offline"
          ? "status-offline"
          : ""
      }">${item.status}</span>
      <p>12:45</p>
    </div>
  </div>
    `;
}
function renderList(data, renderFunc) {
  return data.map(renderFunc).join("");
}
let userHtmlContent = renderList(userArr, renderUserItem);
sidebarMsgList.innerHTML = userHtmlContent;
