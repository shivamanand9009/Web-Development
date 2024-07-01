import "./App.css";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import PostList from "./components/postList";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/createPost";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelecedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelecedTab={setSelecedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
