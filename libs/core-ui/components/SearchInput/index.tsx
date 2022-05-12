import { SearchWrapper } from "./styled";
import { Input } from "antd";
import { Icon } from "../Icon";
import t from "./../../../locale"


const { SearchIcon } = Icon;

export const SearchInput = () => {
  return (
    <SearchWrapper>
        <Input placeholder={t("common.search")} prefix={<SearchIcon width={20} height={20} />} />
    </SearchWrapper>
  );
};
