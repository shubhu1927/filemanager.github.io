import React, { createContext, useState } from "react";
import FileData from "./FileData";

export const FileCreateContext = createContext();

export default function FileExplorerContextWrapper({ children }) {
  const [nodes, setNodes] = useState(FileData);
  const AddNode = (parentId, value) => {
    const NewId = Date.now();
    const NewData = { id: NewId, name: value, parentId: parentId };
    const isFolder = value.split(".");
    if (isFolder > 1) {
      NewData.type = "file";
    } else {
      (NewData.type = "folder"), (NewData.children = []);
    }
    const updateNodes = { ...nodes, [NewId]: NewData };
    if (parentId !== null) {
      updateNodes[parentId].children.unshift(newId);
    }
    setNodes(updateNodes);
  };
  const EditNode = (id, value) => {
    const updatedNodes = { ...nodes };
    updatedNodes[id].name = value;
    setNodes(updatedNodes);
  };
  const DeleteNode = (id) => {
    const UpdatedNodes = { ...nodes };
    const parentId = UpdatedNodes[id].parentId;
    if (parentId !== null && !UpdatedNodes[parentId]) {
      console.error(`Parent with id ${parentId} does not exist!`);
      return; // If parent doesn't exist, exit the function
    }
    if (parentId !== null) {
      UpdatedNodes[parentId].children = UpdatedNodes[parentId].children.filter(
        (childId) => {
          return childId !== id;
        }
      );
    }

    const queue = [id];
    while (queue.length > 0) {
      const currentId = queue.shift();
      if (UpdatedNodes[currentId].children) {
        queue.push(...nodes[currentId].children);
        delete UpdatedNodes[currentId];
      }
    }
    setNodes(UpdatedNodes);
  };

  return (
    <>
      <FileCreateContext.Provider
        value={{ nodes, DeleteNode, AddNode, EditNode }}
      >
        {children}
      </FileCreateContext.Provider>
    </>
  );
}
