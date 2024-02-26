import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestHome from "./pages/guestHome/GuestHome";
import UserHome from "./pages/userHome/UserHome";
import ArticlePage from "./pages/articlePage/ArticlePage";
import LibraryPage from "./pages/libraryPage/LibraryPage";
import MyArticlesPage from "./pages/myArticlesPage/MyArticlesPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import WritePage from "./pages/writePage/WritePage";
import TopicsPage from "./pages/topicsPage/TopicsPage";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="App font-['Tyros Pro']">
        <Routes>
          <Route index path ="/" element={<GuestHome />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/myarticles" element={<MyArticlesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/results" element={<SearchResultPage />} />
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;
