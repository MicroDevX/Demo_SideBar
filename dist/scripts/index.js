import * as sidebarContent from "./loadSidebar.js";
const sidebar = document.getElementById("sidebar");
sidebar?.appendChild(sidebarContent.LoadLogo());
sidebar?.appendChild(sidebarContent.seperatorLine());
sidebar?.appendChild(sidebarContent.NewTreeViewItem("Home", "\uF4E2", () => { }));
sidebar?.appendChild(sidebarContent.NewTreeViewItem("Trash", "\uF1F8", () => { }));
//# sourceMappingURL=index.js.map