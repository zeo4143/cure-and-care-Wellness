import React from "react";
import TabLayout from "./components/TabLayout/TabLayout";

const App = () => {
  const tabs = [
    {
      id: 0,
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 1,
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 2,
      title: "javascript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];
  return (
    <div>
      <TabLayout key="TabLayout" tabs={tabs} />
    </div>
  );
};

export default App;
