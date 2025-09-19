const LogoContainer = document.createElement("div");
LogoContainer.title = "Home | MicroDevX";
LogoContainer.classList.add("LogoContainer");
LogoContainer.addEventListener("click", () => {
    window.location.href = "index.html";
})

const TitleLogo = document.createElement("p");
TitleLogo.style.fontSize = "30px";
TitleLogo.innerText = "MicroDevX";

const Logo = document.createElement("img");
Logo.src = "./src/Images/logo.png";
Logo.draggable = false;
Logo.classList.add("Logo");

LogoContainer.appendChild(Logo);
LogoContainer.appendChild(TitleLogo);
export function LoadLogo() { return LogoContainer };
// ------------------------------------
const seperator = document.createElement("hr");
seperator.style.width = "90%";
export function seperatorLine() { return seperator; }
//---------------------------------------
type Item = {
    Content: string;
    GlyphIcon: string;
    onclick: () => void;
    Title: string;
};

export function processData(data: Array<Item>) {
    const treeViews: HTMLDivElement[] = [];
    data.forEach(item => {
        const CTreeView = document.createElement("div");
        CTreeView.classList.add("CTreeView");

        const LogoCTreeView = document.createElement("p");
        LogoCTreeView.classList.add("TreeViewItemLogo");

        const TitleCTreeView = document.createElement("p");
        TitleCTreeView.classList.add("TreeViewItemTitle");

        CTreeView.appendChild(LogoCTreeView);
        CTreeView.appendChild(TitleCTreeView);

        CTreeView.title = item.Content;
        CTreeView.addEventListener("click", item.onclick);

        LogoCTreeView.innerText = item.GlyphIcon;
        LogoCTreeView.style.fontFamily = "FiraCode";

        TitleCTreeView.innerText = item.Content;
        treeViews.push(CTreeView);
    });
    return treeViews;
}