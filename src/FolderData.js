import React, { useContext, useState } from "react";
import { use } from "react";
import { FileCreateContext } from "./Filecreatecontent";
import { Input } from "./input";

const FolderData = ({ id = 1 }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const { nodes, DeleteNode, AddNode, EditNode } =
    useContext(FileCreateContext);
  const HandleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div className="container">
        {showEdit ? (
          <Input
            name={nodes[id].name}
            id={id}
            submit={EditNode}
            cancel={() => setShowEdit(false)}
          ></Input>
        ) : (
          <>
            <span onClick={HandleClick}>{nodes[id].name}</span>
            {nodes[id].type === "folder" && (
              <span onClick={() => setShowAdd(true)}>➕</span>
            )}
            <span onClick={() => setShowEdit(true)}>🖋️</span>
            <span onClick={() => DeleteNode(id)}>✖️</span>
          </>
        )}
      </div>
      <>
        {showAdd && (
          <Input
            id={id}
            submit={AddNode}
            cancel={() => setShowAdd(false)}
          ></Input>
        )}
      </>
      {showChildren &&
        nodes[id]?.children?.map((childId, index) => {
          return (
            <>
              <FolderData key={index} id={childId}></FolderData>
            </>
          );
        })}
    </>
  );
};

export default FolderData;
