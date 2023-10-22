import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/*  라우터에 영향을 받지않는 컴포넌트들*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//Route path는 이동할 경로 , element는 그 경로에 띄어줄 컴포넌트
