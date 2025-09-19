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
const CTreeView = document.createElement("div");
CTreeView.classList.add("CTreeView");


const LogoCTreeView = document.createElement("p");
LogoCTreeView.classList.add("TreeViewItemLogo");

const TitleCTreeView = document.createElement("p");
TitleCTreeView.classList.add("TreeViewItemTitle");

CTreeView.appendChild(LogoCTreeView);
CTreeView.appendChild(TitleCTreeView);
export function NewTreeViewItem(
    Contnet: string,
    GlyphIcon: string,
    task: () => void,
    Title: string = Contnet) {
    
    
    CTreeView.title = Contnet;
    CTreeView.addEventListener("click", task);

    LogoCTreeView.innerText = GlyphIcon;
    LogoCTreeView.style.fontFamily = "FiraCode";

    TitleCTreeView.innerText = Contnet;
    return CTreeView
};

