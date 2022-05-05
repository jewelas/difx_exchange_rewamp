import { Search, SearchWrapper } from "./styled";
import { Icon } from "../Icon";
import t from "./../../../locale"


const { SearchIcon } = Icon;

export const SearchInput = () => {
  return (
    <SearchWrapper>
        <Search placeholder={t("common.search")} prefix={<SearchIcon width={20} height={20} />} />
    </SearchWrapper>
  );
};
