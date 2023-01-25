export class NodeService {
  getTreeNodes() {
    return fetch("/data/treenodes.json", {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => res.json())
      .then((d) => d.root);
  }

  getTreeTableNodes() {
    return fetch("/data/treetablenodes.json", {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => res.json())
      .then((d) => d.root);
  }
}
