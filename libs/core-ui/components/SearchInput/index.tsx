import { Search, SearchWrapper } from "./styled";
import { Icon } from "../Icon";


const { SearchIcon } = Icon;

export const SearchInput = () => {
  return (
    <SearchWrapper>
        <Search placeholder="Search" prefix={<SearchIcon width={20} height={20} />} />
    </SearchWrapper>
  );
};
