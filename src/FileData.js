const FileData = {
  1: {
    id: 1,
    name: "file manager",
    type: "folder",
    parentId: null,
    children: [2],
  },
  2: {
    id: 2,
    name: "public",
    type: "folder",
    parentId: 1,
    children: [3, 4],
  },
  3: {
    id: 3,
    name: "index.html",
    type: "file",
    parentId: 2,
    children: [],
  },
  4: {
    id: 4,
    name: "index.js",
    type: "file",
    parentId: 2,
    children: [],
  },
  5: {
    id: 5,
    name: "index.css",
    type: "file",
    parentId: 1,
    children: [],
  },
};

export default FileData;
