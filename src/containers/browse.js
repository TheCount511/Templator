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
import { useState } from "react";

const BrowseContainer = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const ShowDropdown = (sampleState, setSampleState) => {
    setSampleState(() => !sampleState);
  };

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
        bannerText={
          "Tada! Get Started with a free template. Can't find what you are looking for? Search from the 1000+ available templates"
        }
      />
      <Browseheader>
        <Browseheader.BrowseInfo>{`All`} Templates</Browseheader.BrowseInfo>
        <Browseheader.TemplateCount>
          {`2000`} Templates
        </Browseheader.TemplateCount>
      </Browseheader>
      <BrowsePane>
        {nums.map((item, index) => (
          <TemplateCard
            title={`Alumni Membership Form Template ${index}`}
            description={`Engage your alumni network better with this alumni registration form template. Embed This is your website...`}
          />
        ))}
      </BrowsePane>
      <Pagination>
        <Pagination.PageNav>
          {2 > 1 && <img src={BackwardIcon} alt="back"></img>}
          <span>Previous</span>
        </Pagination.PageNav>
        <Pagination.PageNumbering currentPage={1} numberOfPages={15} />
        <Pagination.PageNav>
          <span>Next</span>
          {2 > 1 && <img src={ForwardIcon} alt="back"></img>}
        </Pagination.PageNav>
      </Pagination>
    </>
  );
};

export default BrowseContainer;
