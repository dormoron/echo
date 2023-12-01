import { Route, Routes } from "@solidjs/router";
import Home from "@/view/home";
import ArticleDetailPage from "@/view/article";

function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/detail" component={ArticleDetailPage} />
    </Routes>
  );
}

export default App;
