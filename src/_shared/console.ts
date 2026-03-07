export function printConsoleBadge(text: string, style: Record<string, string> = {}): void {
  console.log(`%c${text}`, Object.entries(style)
    .reduce((e, [a, s]) => e + `${a}: ${s};`, ""));
}

export function printConsoleImage(img: string, size: number = 150): void {
  const fileReader = new FileReader;
  fileReader.addEventListener("load", () => {
    console.log("%c     ", `background: url('${fileReader.result}') left top no-repeat; font-size: ${size}px; background-size: contain; background-color: transparent`);
  }),
    fetch(img)
      .then(a => a.blob())
      .then(a => {
        if (!a.type.indexOf("image")) return a;
        throw new Error("Valid image not found.");
      })
      .then(a => fileReader.readAsDataURL(a))
      .catch(a => console.warn(a.message));
}