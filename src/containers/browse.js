import {
  BannerText,
  Browseheader,
  BrowsePane,
  Navbar,
  TemplateCard,
  Pagination,
} from "../components/";
import BackwardIcon from "../assets/icons/arrow_back.svg";
import ForwardIcon from "../assets/icons/arrow_forward.svg";
import { useEffect, useState } from "react";

const BrowseContainer = () => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const ShowDropdown = (sampleState, setSampleState) => {
    setSampleState(() => !sampleState);
  };

  const [post, setPost] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postPerPage] = useState(9);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(
        "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      );
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);

  const lastPost = pageNumber * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const numberofPages = Math.ceil(post.length / postPerPage);

  const PageNumber = () => {
    if (numberofPages === 0) {
      return 1;
    } else {
      return numberofPages;
    }
  };

  console.log(numberofPages)

  const [prevButtonState, setPrevButtonState] = useState("active");
  const [nextButtonState, setNextButtonstate] = useState("active");

  useEffect(() => {
   if (pageNumber === 1) setPrevButtonState("inactive");
   else  setPrevButtonState("active");
  },[prevButtonState, pageNumber, numberofPages]);

  useEffect(() => {
    if (pageNumber >= numberofPages) setNextButtonstate("inactive");
    else setNextButtonstate("active");
   },[ nextButtonState, pageNumber, numberofPages]);

  return (
    <>
      <Navbar>
        <Navbar.SearchBar />
        <Navbar.SortContainer>
          <Navbar.SortLabel>Sort By: </Navbar.SortLabel>
          <Navbar.SortItems>
            <Navbar.SortItem
              name={"Category"}
              options={[1, 2, 3, 4]}
              onClick={() => {
                ShowDropdown(showCategoryDropdown, setShowCategoryDropdown);
              }}
              dropdownIsVisible={showCategoryDropdown}
            />
            <Navbar.SortItem
              name={"Order"}
              options={[1, 2, 3, 4]}
              onClick={() => {
                ShowDropdown(showOrderDropdown, setShowOrderDropdown);
              }}
              dropdownIsVisible={showOrderDropdown}
            />
            <Navbar.SortItem
              name={"Date"}
              options={[1, 2, 3, 4]}
              onClick={() => {
                ShowDropdown(showDateDropdown, setShowDateDropdown);
              }}
              dropdownIsVisible={showDateDropdown}
            />
          </Navbar.SortItems>
        </Navbar.SortContainer>
      </Navbar>
      <BannerText
        bannerText={`Tada! Get Started with a free template. Can't find what you are looking for? Search from the ${
          Math.ceil(post.length/ 2) 
        }+ available templates`}
      />
      <Browseheader>
        <Browseheader.BrowseInfo>{`All`} Templates</Browseheader.BrowseInfo>
        <Browseheader.TemplateCount>
          {post.length} Templates
        </Browseheader.TemplateCount>
      </Browseheader>
      <BrowsePane>
        {currentPost.map((item, index) => (
          <TemplateCard
            key={`item ${index}`}
            title={item.name}
            description={item.body}
          />
        ))}
      </BrowsePane>
      <Pagination>
        <Pagination.PageNav activeState={prevButtonState}
          onClick={() => {
            if (pageNumber !== 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
        >
          {pageNumber > 1 && <img src={BackwardIcon} alt="back"></img>}
          <span>Previous</span>
        </Pagination.PageNav>

        <Pagination.PageNumbering
          currentPage={pageNumber}
          numberofPages={PageNumber()}
        />
        <Pagination.PageNav activeState={nextButtonState}
          onClick={() => {
            if (pageNumber !== numberofPages && numberofPages !== 0) {
              setPageNumber(pageNumber + 1);
            }
          }}
        >
          <span>Next</span>
          {(pageNumber < numberofPages) && (
            <img src={ForwardIcon} alt="forward"></img>
          )}
        </Pagination.PageNav>
      </Pagination>
    </>
  );
};

export default BrowseContainer;
