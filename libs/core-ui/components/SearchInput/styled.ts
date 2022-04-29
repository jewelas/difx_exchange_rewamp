import { Input } from "antd";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    text-align: right;
`;
export const Search = styled(Input)`
    max-width: 320px;
    padding: 0px 15px !important;
    .ant-input{
        background-color: transparent !important;
    }
    .ant-input-prefix{
        margin-right: 10px;
    }
`;