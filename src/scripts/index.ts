import * as sidebarContent from "./loadSidebar.js";

const sidebar = document.getElementById("sidebar");

sidebar?.appendChild(sidebarContent.LoadLogo());

sidebar?.appendChild(sidebarContent.seperatorLine());

type Item = {
    Content: string;
    GlyphIcon: string;
    onclick: () => void;
    Title: string;
};
const items: Item[] = [
    {
        Content: "Home",
        GlyphIcon: "\uF4E2",
        onclick: () => console.log("Dome"),
        Title: "Home"
    },
    {
        Content: "Trash",
        GlyphIcon: "\uF1F8",
        onclick: () => console.log("Done"),
        Title: "Trash"
    }
];

sidebarContent.processData(items).forEach(item => {
    sidebar?.appendChild(item);
})